interface typeAction {
  type: string;
}
const changeState = (state: boolean = false, action: typeAction) => {
  switch (action.type) {
    case "change":
      return !state;
    default:
      return state;
  }
};
export default changeState;
