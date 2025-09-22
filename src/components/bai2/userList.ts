interface typeAction {
  type: string;
  payload: number | string;
}

interface User {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  address: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "Nam",
    dateOfBirth: "20/11/2023",
    address: "Thanh Xuân, Hà Nội",
  },
  {
    id: 2,
    name: "Nguyễn Thị B",
    gender: "Nữ",
    dateOfBirth: "20/11/2023",
    address: "Cầu Giấy, Hà Nội",
  },
];

const listUser = (state: User[] = users, action: typeAction) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};
export default listUser;
