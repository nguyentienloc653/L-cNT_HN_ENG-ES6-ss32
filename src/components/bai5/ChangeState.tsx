import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  const textState = useSelector((state) => state.changeState);
  const dispatch = useDispatch();
  const handleChange = () => dispatch({ type: "change" });

  return (
    <div>
      <h2>{textState ? "RikkeiAcademy" : "RikkeiSoft"}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
