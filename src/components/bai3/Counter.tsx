import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch({ type: "increase" });
  const decrease = () => dispatch({ type: "decrease" });

  return (
    <div>
      <h2>{result}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
