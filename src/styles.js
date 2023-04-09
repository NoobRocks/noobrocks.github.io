import colors from "./colors";

const styles = {
  app: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "rgb(20, 20, 20)",
  },

  loading: {
    color: colors.variable,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "calc(100vh - 70px - 50px)",
    minHeight: "50px",
    fontSize: "1.2rem",
  },
};

export default styles;
