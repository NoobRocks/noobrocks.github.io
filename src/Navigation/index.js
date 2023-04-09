import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

import styles from "./styles";

function Navigation(props) {
  return (
    <>
      <div style={styles.navigation}>
        <div style={styles.innerNavigation}>
          <div style={styles.linkMargin}/>
          {props.links.filter(linkInfo => linkInfo.path !== "*").map(linkInfo => (<ActivableLink key={`link${linkInfo.path}`} to={linkInfo.path}>{linkInfo.name}</ActivableLink>))}
        </div>
      </div>
      <div style={styles.placeholder}/>
    </>
  );
}

function ActivableLink({children, to, ...props}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({path: resolved.pathname, end: true});

  return (
    <Link style={match ? styles.activeLink : styles.link} to={to} {...props}>
      {children}
    </Link>
  );
}

export default Navigation;
