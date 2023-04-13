
import React, {useCallback, useMemo, useState} from "react";
import dayjs from "dayjs";

import styles from "./styles";

const computableDate = dateString => {
  if (dateString === "present") {
    return dayjs();
  }
  const dateSplits = dateString.split("-");
  if (dateSplits.length === 2) {
    return dayjs(new Date(parseInt(dateSplits[0]), parseInt(dateSplits[1]) - 1));
  }
  return;
};

const getTimelineItemDuration = months => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const unitArray = [["year", "years"], ["month", "months"]];
  return [years, remainingMonths].map((v, i) => {
    if (v > 0) {
      return `${v} ${unitArray[i][v > 1 ? 1 : 0]}`;
    }
    return "";
  }).filter(v => !!v).join(" ");
};

function Timeline({items}) {
  const renderableTimelineItems = useMemo(() =>
    items.map(item => {
      const computableStarted = computableDate(item.started);
      const computableEnded = computableDate(item.ended);
      return {
        ...item,
        computableStarted,
        computableEnded,
        duration: computableEnded.diff(computableStarted, "month")
      };
    }).sort((v1, v2) => v2.computableStarted.unix() - v1.computableStarted.unix()), [items]);

  const [timelineItemIndices, setTimelineItemIndices] = useState(new Set());
  const toggleTiminelineItemIndex = (timelineItemIndex, action) => {
    action === "+" ? timelineItemIndices.add(timelineItemIndex) : timelineItemIndices.delete(timelineItemIndex);
    setTimelineItemIndices(new Set(timelineItemIndices));
  };

  return (
    <div style={styles.timeline}>
      <div style={styles.timelineBaseAxis}/>
      <TimelineArrow style={styles.timelineArrow}/>
      <div style={styles.timelineAxis}>
        {renderableTimelineItems.map((item, i) => {
          const selected = timelineItemIndices.has(i);
          return (
            <div key={`timelineItem${i}`} style={i < renderableTimelineItems.length - 1 ? styles.timelineItem : styles.lastTimelineItem}>
              <div style={styles.timelineItemBullet}/>
              <div style={styles.timelineItemInfo}>
                <div>
                  <span>{`${item.position} at `}</span>
                  <a style={styles.timelineItemLink} href={item.companyLink} target="_blank" rel="noreferrer">{item.company}</a>
                </div>
                {selected && <div style={styles.timelineItemInfoDetails}>{`${item.started} ~ ${item.ended} (${getTimelineItemDuration(item.duration)})`}</div>}
              </div>
              <TimelineItemToggle style={styles.timelineItemToggle} onClick={() => toggleTiminelineItemIndex(i, selected ? "-" : "+")} on={selected}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineArrow({style}) {
  const drawArrow = useCallback(canvasRef => {
    if (!canvasRef) {
      return;
    }
    canvasRef.width = 48;
    canvasRef.height = 64;
    const canvasDrawer = canvasRef.getContext("2d");
    canvasDrawer.fillStyle = "rgb(214, 214, 188)";
    canvasDrawer.beginPath();
    canvasDrawer.moveTo(24, 0);
    canvasDrawer.lineTo(0, 64);
    canvasDrawer.quadraticCurveTo(24, 48, 48, 64);
    canvasDrawer.closePath();
    canvasDrawer.fill();
  }, []);
  return <canvas style={{...styles.timelineArrow, ...style}} ref={drawArrow}/>;
}

function TimelineItemToggle(props) {
  const {on, ...restProps} = props;
  return (
    <a {...restProps}>
      {!on && <div style={styles.timelineItemToggleVerticalLine}/>}
      <div style={styles.timelineItemToggleHorizontalLine}/>
    </a>
  );
}

export default Timeline;
