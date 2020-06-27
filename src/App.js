import React, { useState } from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={() => setCounter((prevstate) => prevstate + 5)}>
        Add
      </button>
      <button onClick={() => setCounter((prevstate) => prevstate - 5)}>
        Substract
      </button>
      <button onClick={() => setCounter(initialState)}>Reset</button>

      <div>First Name : {name.firstName}</div>
      <div>Last Name : {name.lastName}</div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <button onClick={addItem}>Click ME</button>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <li>{item.value}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
