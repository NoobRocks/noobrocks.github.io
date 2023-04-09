import colors from "../../colors";

const styles = {
  hero: {
    width: "100%",
    height: "35vh",
    minHeight: "200px",
    backgroundColor: colors.background,
    position: "relative",
    overflow: "hidden",
  },

  heroText: {
    color: colors.comment,
    fontSize: "1.2rem",
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "100%",
    padding: "6%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 1,
  },
    
  heroTitle: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    color: colors.keyword,
  },

  heroSubtitle: {
    marginTop: "0.8rem",
  },
    
  codeViewport: {
    position: "absolute",
    left: 0,
    top: "50%",
    width: "50%",
    maskImage: "linear-gradient(to left, transparent, black 30%, black)",
    WebkitMaskImage: "linear-gradient(to left, transparent, black 30%, black)",
    overflow: "hidden",
  },

  codeImage: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%) scale(0.7)",
  },
};

export default styles;
