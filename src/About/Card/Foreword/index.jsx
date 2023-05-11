import {useContext} from "react";

import styles from "./styles";
import {HeaderHeightContext} from "../..";

function Foreword(props) {
  const headerHeight = useContext(HeaderHeightContext);
  
  return (
    <div style={{...styles.foreword, minHeight: `calc(100vh - ${headerHeight}px)`}}>{props.children}</div>
  );
}

export default Foreword;
