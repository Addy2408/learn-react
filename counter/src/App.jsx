import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0);

  const increase = () => {
    if(counter >= 20) {
      alert("Counter value cannot be greater than 20");
      return;
    }
    setCounter(counter + 1);
  }

  const decrease = () => {
    if(counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>The counter value is : {counter}</p>
      <button onClick={increase}>Increase</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
