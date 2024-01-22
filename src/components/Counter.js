import { useCounterStore } from "../zustand/createCounterStore";

export const Counter = () => {
  const counterNumber = useCounterStore((state) => state.number);
  const increaseNumber = useCounterStore(
    (state) => state.increaseCounterNumber
  );
  const decreaseNumber = useCounterStore(
    (state) => state.decreaseCounterNumber
  );

  return (
    <div
      style={{
        background: "rgb(171 237 230)",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h1>Counter Application</h1>
      <button onClick={decreaseNumber}>-</button>
      {counterNumber}
      <button onClick={increaseNumber}>+</button>
    </div>
  );
};
