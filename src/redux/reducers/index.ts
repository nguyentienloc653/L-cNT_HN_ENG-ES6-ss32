import { combineReducers } from "redux";
import userReducer from "../../components/bai1/useReducer";
import listUser from "../../components/bai2/ListUser";
import counterReducer from "../../components/bai3/Counter";
import randomReducer from "../../components/bai4/RandomNumber";
import changeState from "../../components/bai5/ChangeState";
import changeTheme from "../../components/bai6/changeTheme";
import authReducer from "../../components/bai7/Auth.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: listUser,
  counter: counterReducer,
  random: randomReducer,
  changeState: changeState,
  changeTheme: changeTheme,
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
