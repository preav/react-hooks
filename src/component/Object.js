import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    firstName: "Akshay",
    lastName: "Sharma",
    age: "25",
    address: {
      hno: "#127 shastri nagar",
      city: "kota",
      state: "rajasthan",
      pin: "324009",
      counter: "0",
      chocolates: {
        silk: "10",
        kitkat: "3",
      },
    },
  });

  const ageIncrement = () => {
    setName({
      ...name,
      age: parseInt(name.age) + 1,
    });
  };
  const counterIncrement = () => {
    setName({
      ...name,
      address: {
        ...name.address,
        counter: parseInt(name.address.counter) + 1,
      },
    });
  };
  const silkIncrement = () => {
    setName({
      ...name,
      address: {
        ...name.address,
        chocolates: {
          ...name.address.chocolates,
          silk: parseInt(name.address.chocolates.silk) + 1,
        },
      },
    });
  };
  return (
    <div className="App">
      <div>First Name : {name.firstName}</div>
      <div>Last Name : {name.lastName}</div>
      <div>age : {name.age}</div>
      <button onClick={ageIncrement}>age++</button>
      <div>House No : {name.address.hno}</div>
      <div>City : {name.address.city}</div>
      <div>State : {name.address.state}</div>
      <div>Pin : {name.address.pin}</div>
      <div>Counter : {name.address.counter}</div>
      <button onClick={counterIncrement}>Counter++</button>
      <div>Silk : {name.address.chocolates.silk}</div>
      <div>KitKat : {name.address.chocolates.kitkat}</div>
      <button onClick={silkIncrement}>Silk++</button>
    </div>
  );
}

export default App;
