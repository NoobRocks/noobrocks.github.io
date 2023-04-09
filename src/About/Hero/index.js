import React from "react";

import styles from "./styles";
import {useElementSize} from "../../helpers";

const HERO_HEIGHT_WIDTH_RATIO = 1.2;
const CODE_VIEWPORT_HEIGHT_WIDTH_RATIO = 1.5;

function Hero () {
  const [codeViewportRef, {width: codeViewportWidth}] = useElementSize();

  const getImageViewportSkewY = () => {
    const oppositeSide = (CODE_VIEWPORT_HEIGHT_WIDTH_RATIO - HERO_HEIGHT_WIDTH_RATIO) / 2;
    const longSide = Math.sqrt(Math.pow(oppositeSide, 2) + Math.pow(1 / 2, 2));
    return Math.floor(Math.asin(oppositeSide / longSide) * 180 / Math.PI);
  };

  const heroStyle = {
    ...styles.hero,
    maxHeight: codeViewportWidth > 0 ? `${Math.ceil(codeViewportWidth * HERO_HEIGHT_WIDTH_RATIO)}px` : "none",
    visibility: codeViewportWidth > 0 ? "inherit" : "hidden"
  };
  const codeViewportStyle = {
    ...styles.codeViewport,
    height: codeViewportWidth > 0 ? `${Math.ceil(codeViewportWidth * CODE_VIEWPORT_HEIGHT_WIDTH_RATIO)}px` : "auto",
    transform: `translateY(-50%) skewY(${getImageViewportSkewY()}deg)`,
  };
  return (
    <div style={heroStyle}>
      <div style={styles.heroText}>
        <span style={styles.heroTitle}>Anders</span>
        <span style={styles.heroSubtitle}># Journey of a Coding Artist</span>
      </div>
      <div style={codeViewportStyle} ref={codeViewportRef}>
        <img style={styles.codeImage} src={require("../../assets/images/code.jpg")} alt="code"/>
      </div>
    </div>
  );
}

export default Hero;
