import { useDispatch, useSelector } from "react-redux";

export default function Theme() {
  const themeState = useSelector((state) => state.changeTheme);
  const dispatch = useDispatch();
  const handleChange = () => dispatch({ type: "changeTheme" });

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: themeState ? "white" : "black",
        color: themeState ? "black" : "white",
      }}
    >
      <input type="checkbox" onChange={handleChange} />
      <label htmlFor="">{themeState ? "Sáng" : "Tối"}</label>
    </div>
  );
}
