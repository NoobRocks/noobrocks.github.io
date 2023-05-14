import {useContext, useEffect, useMemo, useState} from "react";
import MobileDetect from "mobile-detect";

import styles from "./styles";
import {HeaderHeightContext} from "../..";
import {useWindowSize} from "../../../helpers";

function Foreword(props) {
  const headerHeight = useContext(HeaderHeightContext);
  const [interacted, setInteracted] = useState(false);
  const mobileDetector = useMemo(() => new MobileDetect(window.navigator.userAgent), []);
  const {height: windowHeight} = useWindowSize(!!mobileDetector.mobile() && interacted);

  useEffect(() => {
    document.addEventListener("pointerdown", () => setInteracted(true), {once: true});
  }, []);
  
  return (
    <div style={{
        ...styles.foreword,
        minHeight: `calc(${(windowHeight && windowHeight + "px") || "100vh"} - ${headerHeight || 0}px)`,
        visibility: windowHeight && headerHeight ? "inherit" : "hidden"
      }}>
      {props.children}
    </div>
  );
}

export default Foreword;
