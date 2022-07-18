const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL":
      return { ...state, count: 0 };
    case "CLOTHES":
      return { ...state, count: 1 };
    case "TECH":
      return { ...state, count: 2 };
    default:
      return state;
  }
};

export default counterReducer;
