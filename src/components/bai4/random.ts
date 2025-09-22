interface typeAction {
  type: string;
  payload: number;
}
const randomReducer = (state = [], action: typeAction) => {
  switch (action.type) {
    case "random":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default randomReducer;
