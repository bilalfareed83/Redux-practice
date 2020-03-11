const iState = {
  number: 0
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return { ...state, number: action.payload.number };

    default:
      return { ...state };
  }
};

export default reducer;
