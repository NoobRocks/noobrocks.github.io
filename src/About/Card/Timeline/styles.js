import colors from "../../../colors";

const timelineItem = {
  width: "calc(100% + 10px)",
  marginBottom: "max(10vh, 60px)",
  transform: "translate(-10px, 0)",
  display: "flex",
  lineHeight: "1.2",
  fontStyle: "italic",
};

const timelineItemToggleLine = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: colors.variable,
};

const styles = {
  timeline: {
    width: "100%",
    margin: "3% 0 0 0",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },

  timelineBaseAxis: {
    position: "absolute",
    left: "10%",
    top: "30px",
    width: "4px",
    height: "calc(100% - 30px)",
    backgroundColor: colors.func,
    maskImage: "linear-gradient(to top, transparent, black 8%, black)",
    WebkitMaskImage: "linear-gradient(to top, transparent, black 8%, black)",
  },

  timelineAxis: {
    margin: "max(5vw, 60px) 0 max(5vw, 60px) 10%",
    width: "calc(100% - 10%)",
  },

  timelineItem,

  lastTimelineItem: {
    ...timelineItem,
    marginBottom: 0,
  },

  timelineItemBullet: {
    marginRight: "max(4vw, 20px)",
    width: `24px`,
    height: `24px`,
    borderRadius: "50%",
    backgroundColor: colors.func,
    flexShrink: 0,
  },

  timelineItemInfo: {
    width: "56%",
    overflow: "hidden",
  },

  timelineItemInfoDetails: {
    color: colors.keyword,
    fontSize: "1rem",
  },

  timelineItemLink: {
    color: colors.variable,
  },

  timelineItemToggle: {
    marginLeft: "14px",
    marginTop: "4px",
    width: "16px",
    height: "16px",
    boxSizing: "border-box",
    borderRadius: "50%",
    border: `2px solid ${colors.variable}`,
    position: "relative",
    flexShrink: 0,
  },

  timelineItemToggleHorizontalLine: {
    ...timelineItemToggleLine,
    width: "70%",
    height: "2px",
  },

  timelineItemToggleVerticalLine: {
    ...timelineItemToggleLine,
    width: "2px",
    height: "70%",
  },

  timelineArrow: {
    position: "absolute",
    left: "10%",
    top: 0,
    width: "30px",
    height: "40px",
    transform: "translateX(-13px)",
  },
};

export default styles;
