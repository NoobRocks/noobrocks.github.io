import React from "react";

import styles from "./styles";

function SkillCategoryList({listItems}) {
  return (
    <div style={styles.skillCategoryList}>
      {listItems.map((item, i) => (
        <SkillCategory key={`skillCategory${i}`} style={i === listItems.length - 1 ? styles.lastSkillCategoy : undefined} {...item}/>
      ))}
    </div>
  );
}

function SkillCategory({category, itemSet, style}) {
  return (
    <div style={{...styles.skillCategory, ...style}}>
      <div style={styles.category}>{category}</div>
      <div style={styles.itemSet}>
        {itemSet.map((item, i) => <SkillItem key={`skillItem${i}`} item={item} last={i === itemSet.length - 1}/>)}
      </div>
    </div>
  );
}

function SkillItem({item, last}) {
  const itemStyle = last ? styles.lastSkillItem : undefined;
  if (!item.name || !item.note) {
    return <div style={{...styles.stringItem, ...itemStyle}}>{item}</div>;
  }
  return (
    <div style={{...styles.notedItem, ...itemStyle}}>
      <div style={styles.notedItemName}>{item.name}</div>
      <div style={styles.notedItemNote}>{item.note}</div>
    </div>
  );
}

export default SkillCategoryList;
