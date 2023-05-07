import React from "react";

import styles from "./styles";
import Timeline from "./Timeline";
import SkillCategoryList from "./SkillCategoryList";
import Slideshow from "./Slideshow";

function Card(props) {
  const {title, children, last} = props;
  return (
    <div style={!last ? styles.card : {...styles.card, ...styles.lastCard}}>
      {title && <div style={styles.cardTitle}>{title}</div>}
      {children}
    </div>
  );
}

export const renderCardItem = (item) => {
  if (item.kind === "text") {
    return <div style={{...styles.textItem, ...item.style}}>{item.data}</div>;
  }
  if (item.kind === "timeline") {
    return <Timeline items={item.data}/>;
  }
  if (item.kind === "skills") {
    return <SkillCategoryList listItems={item.data}/>;
  }
  if (item.kind === "slideshow") {
    return <Slideshow slideItems={item.data}/>;
  }
  return false;
};

export default Card;
