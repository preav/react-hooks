import React, { useState, useEffect } from "react";
import Timer from "./components/timer";
import Data from "./components/datafetch";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="App">
      {counter}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={(e) => setCounter((item) => item + 1)}>Click me</button>
      <Timer />
      <Data />
    </div>
  );
}

export default App;

// Key Points
//   - we can use multiple useEffect
//   - useEffect runs after every render
//   - useEffect is the composition of componentdidmount, componentdidupdate, and componentwillunmount
//   - How to optimse every render ?
//     - pass secound argument in the useEffect function
//       which is an array, stating if the item(basically a state variable) inside the array changes the next render works
//         which is similar to component di update
//     - if we pass empty array, it will render only once which is  similar to componentdidmount
//   - Cleanup
//     - return another function which will resemble to componentwillunmount
//    - API fetching using useeffect and control its render
