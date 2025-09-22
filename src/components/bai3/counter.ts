interface typeAction {
  type: string;
}

const counterReducer = (state = 0, action: typeAction) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
