interface typeAction {
  type: string;
  payload?: string | number;
}

const initialState = {
  id: 1,
  userName: "Nguyễn Văn A",
  gender: "Nam",
  dateBirth: "12/12/2000",
  address: "Thanh Xuân - Hà Nội",
};

const userReducer = (state = initialState, action: typeAction) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};

export default userReducer;
