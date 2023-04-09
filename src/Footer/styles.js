const footerPlaceholder = {
  width: "100%",
  height: "50px"
}

const styles = {
  footer: {
    ...footerPlaceholder,
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
  },

  footerPlaceholder,

  socialLink: {
    margin: "0 0 0 10px",
    width: "22px",
    height: "22px",
  },

  socialLinkImage: {
    width: "100%",
    height: "100%",
  },
};

export default styles;
