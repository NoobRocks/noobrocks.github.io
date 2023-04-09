import colors from "../../../colors";

const fullWidth = {
  width: "100%",
};

const styles = {
  slideShowContainer: {
    width: "100%",
  },

  slideView: {
    overflow: "hidden",
  },

  innerSlideView: {
    display: "flex",
  },

  slide: {
    ...fullWidth,
    padding: "0 3%",
    boxSizing: "border-box",
    minHeight: "300px",
    height: "30vh",
    position: "relative",
    flexShrink: 0,
    display: "flex",
  },

  slideImageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    WebkitTouchCallout: "none",
  },

  slideCaption: {
    position: "absolute",
    right : 0,
    bottom: 0,
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    backgroundColor: "rgba(0, 0, 0, .4)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    color: "white",
    textAlign: "start",
  },

  barView: {
    ...fullWidth,
    marginTop: "1.5rem",
  },

  innerBarView: {
    ...fullWidth,
    justifyContent: "center",
  },

  lastItem: {
    marginRight: 0,
  },

  bar: {
    height: "4px",
    width: "10%",
    backgroundColor: "rgb(64, 64, 64)",
    margin: "0 4% 0 0",
    padding: 0,
    border: 0,
    cursor: "pointer",
  },

  selectedBar: {
    backgroundColor: colors.func,
  },
};

export default styles;
