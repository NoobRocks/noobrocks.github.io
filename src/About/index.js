import React from "react";

import Hero from "./Hero";
import styles from "./styles";
import Card, {renderCardItem} from "./Card";
import aboutItems from "./about-items.json";

function About() {
  return (
    <>
      <Hero/>
      <div style={styles.about}>
        {aboutItems.map((item, i) => (
          <Card key={`aboutItemCard${i}`} title={item.title} last={i === aboutItems.length - 1}>
            {renderCardItem(item)}
          </Card>
        ))}
      </div>
    </>
  );
}

export default About;
