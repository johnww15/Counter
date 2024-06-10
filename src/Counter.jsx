import { useState } from "react";

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const HandleIncreaseButtonClicked = () => {
    setCount(count + 1);
  };

  const HandleDecreaseButtonClicked = () => {
    setCount(count - 1);
  };

  const HandleResetButtonClicked = () => {
    setCount(0);
  };

  const HandleSwapButtonClicked = () => {
    setCount(count * -1);
  };

  return (
    <>
      <h2>
        Count: <h3 data-testid="count">{count}</h3>
      </h2>
      <div>
        <button onClick={HandleIncreaseButtonClicked}>Increase</button>
        <button onClick={HandleDecreaseButtonClicked}>Decrease</button>
        <button onClick={HandleResetButtonClicked}>Reset</button>
        <button onClick={HandleSwapButtonClicked}>-/+</button>
      </div>
    </>
  );
}
