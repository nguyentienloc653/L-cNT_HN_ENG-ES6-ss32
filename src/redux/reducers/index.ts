import { combineReducers } from "redux";
import userReducer from "../../components/bai1/useReducer";
import listUser from "../../components/bai2/ListUser";
import counterReducer from "../../components/bai3/Counter";
import randomReducer from "../../components/bai4/RandomNumber";
import changeState from "../../components/bai5/ChangeState";
import changeTheme from "../../components/bai6/changeTheme";

const rootReducer = combineReducers({
  user: userReducer,
  users: listUser,
  counter: counterReducer,
  random: randomReducer,
  changeState: changeState,
  changeTheme: changeTheme,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
