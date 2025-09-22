interface typeAction {
  type: string;
}
const changeTheme = (state: boolean = false, action: typeAction) => {
  switch (action.type) {
    case "changeTheme":
      return !state;
    default:
      return state;
  }
};
export default changeTheme;
