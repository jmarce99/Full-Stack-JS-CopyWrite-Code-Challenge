const initialState = {
  data: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "sendText":
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
