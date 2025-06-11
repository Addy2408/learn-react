import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter >= 20) {
      alert("Counter value cannot be greater than 20");
      return;
    }
    // Directly updating the state variable
    // This is not recommended as it does not guarantee the latest state
    // counter = counter + 1; // This will not trigger a re-render
    // Instead, we should use the setCounter function provided by useState
    setCounter(counter + 1);

    // Using functional updates to ensure the latest state is used
    // This is important when the state update depends on the previous state
    // This is especially useful in cases where multiple updates are made in quick succession
    // For example, if you want to increase the counter by 2
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  };

  const decrease = () => {
    if (counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

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
