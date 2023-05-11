import React, {createContext, useState} from "react";

import Hero from "./Hero";
import styles from "./styles";
import Card, {renderCardItem} from "./Card";
import aboutItems from "./about-items.json";
import {NAVIGATION_HEIGHT} from "../Navigation/styles";

export const HeaderHeightContext = createContext(0);

function About() {
  const [heroHeight, setHeroHeight] = useState(0);
  
  return (
    <>
      <Hero onHeroHeight={setHeroHeight}/>
      <HeaderHeightContext.Provider value={NAVIGATION_HEIGHT + heroHeight}>
        <div style={styles.about}>
          {aboutItems.map((item, i) => (
            <Card key={`aboutItemCard${i}`} title={item.title} last={i === aboutItems.length - 1}>
              {renderCardItem(item)}
            </Card>
          ))}
        </div>
      </HeaderHeightContext.Provider>
    </>
  );
}

export default About;
