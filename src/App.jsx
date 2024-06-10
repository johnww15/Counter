import "./App.css";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <Counter initialCount={0} />
    </>
  );
}
