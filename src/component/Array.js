import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  const itemIncrement = () => {
    setItems([...items, items[items.length - 1] + 1]);
  };
  console.log(items);
  return (
    <div className="App">
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <button onClick={itemIncrement}>item++</button>
    </div>
  );
}

export default App;
