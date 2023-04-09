import colors from "../../colors";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "800px",
    padding: "0 max(2.3%, 20px) 2em",
    boxSizing: "border-box",
    fontSize: "1.2rem",
    color: colors.variable,
    // backgroundColor: colors.func,
    // borderRadius: "8px",
  },

  lastCard: {
    padding: "0 max(2.3%, 20px)",
  },

  cardTitle: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "1.2rem",
    color: colors.module,
  },
};

export default styles;
