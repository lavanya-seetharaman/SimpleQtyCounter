import { useState } from "react";
import "./styles.css";

export default function App() {
  // State : a initial value
  const [qty, setQty] = useState(0);

  // Action : code that causes an update to the state when something happens
  const increment = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decrement = () => {
    setQty((prevQty) => prevQty - 1);
  };
  //view :the UI definition
  return (
    <div className="App">
      <h1>Redux Example</h1>
      <h2>Add Qty Increment/Decrement </h2>
      <div>
        <button className="btn" onClick={increment}>
          +
        </button>
        {qty}
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}
