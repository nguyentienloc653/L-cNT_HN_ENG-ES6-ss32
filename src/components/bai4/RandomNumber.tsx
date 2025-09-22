import { useDispatch, useSelector } from "react-redux";

export default function RandomNumber() {
  const result = useSelector((state) => state.random);
  const dispatch = useDispatch();
  const handleRandom = () =>
    dispatch({ type: "random", payload: Math.ceil(Math.random() * 100) });

  return (
    <div>
      <h2>{JSON.stringify(result)}</h2>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  );
}
