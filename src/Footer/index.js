import React from "react";

import styles from "./styles";

const socialLinks = [
  {
    kind: "github",
    link: "https://github.com/NoobRocks",
    image: require("../assets/images/GitHub-Mark-Light-64px.png"),
  },
];

function Footer() {
  return (
    <>
      <div style={styles.footerPlaceholder}/>
      <div style={styles.footer}>
        <div>&copy;&#32;2023&#32;Anders</div>
        {socialLinks.map(linkInfo => (
          <a key={`socialLink${linkInfo.kind}`} target="_blank" href={linkInfo.link} rel="noreferrer" style={styles.socialLink}>
            {linkInfo.image ?
              <img style={styles.socialLinkImage} src={linkInfo.image} alt={`${linkInfo.kind} mark`}/>
              :
              linkInfo.text
            }
          </a>
        ))}
      </div>
    </>
  );
}

export default Footer;
