import colors from "../colors";

const link = {
  height: "100%",
  padding: "10px 1.5rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  borderBottom: "4px solid transparent",
  boxSizing: "border-box",
  color: colors.func,
  textDecoration: "none",
  fontSize: "1.2rem",
};

const styles = {
  navigation: {
    width: "100%",
    height: "70px",
    padding: "0 5%",
    boxSizing: "border-box",
    backgroundColor: "rgb(20, 20, 20)",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 10,
  },

  innerNavigation: {
    height: "100%",
    display: "flex",
    overflow: "auto",
  },

  placeholder: {
    width: "100%",
    height: "70px",
  },

  linkMargin: {
    width: "100%",
  },

  link,

  activeLink: {
    ...link,
    borderBottom: `4px solid ${colors.func}`,
    fontWeight: "bold",
  },
};

export default styles;
