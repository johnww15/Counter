import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
      <h1>Counter Application</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={HandleIncreaseButtonClicked}>Increase</button>
      <button onClick={HandleDecreaseButtonClicked}>Decrease</button>
      <button onClick={HandleResetButtonClicked}>Reset</button>
      <button onClick={HandleSwapButtonClicked}>-/+</button>
    </>
  );
}

export default App;
