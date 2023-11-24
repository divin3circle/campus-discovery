// reducer.js
export const initialState = {
  showFilter: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { showFilter: !state.showFilter };
    default:
      throw new Error("Unknown action");
  }
};
