const stateDefault = {};
export const BTThayKinhReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DOI_KINH": {
      state.url = action.glassClick;
      return { ...state };
    }
  }
  return state;
};
