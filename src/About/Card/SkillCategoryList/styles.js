import colors from "../../../colors";

const skillItem = {
  margin: "0 0.5rem 0.5rem 0",
  color: "white",
  backgroundColor: colors.keyword,
  padding: "0.2rem 0.3rem",
  borderRadius: "0.4rem",
};

const skillCategory = {
  marginBottom: "1rem",
};

const styles = {
  skillCategoryList: {
    display: "flex",
    flexDirection: "column",
    color: colors.variable,
  },

  skillCategory,

  lastSkillCategoy: {
    marginBottom: "-0.5rem",
  },

  lastSkillItem: {
    margin: "0 0 0.5rem 0",
  },

  category: {
    fontWeight: "bold",
    color: colors.flow,
    marginBottom: "0.5rem",
  },

  itemSet: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  stringItem: {
    ...skillItem,
  },

  notedItem: {
    ...skillItem,
    backgroundColor: "transparent",
    padding: 0,
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
  },

  notedItemName: {
    backgroundColor: colors.keyword,
    padding: "0.2rem 0.3rem 0",
    borderRadius: "0.4rem 0.4rem 0 0",
  },

  notedItemNote: {
    color: colors.background,
    backgroundColor: colors.func,
    padding: "0 0.3rem 0.2rem 0.3rem",
    borderRadius: "0 0 0.4rem 0.4rem",
    fontSize: "0.9rem",
  },
};

export default styles;
