import React, { useState } from "react";
import First from "./component/First";
import { UserProvider, AddressProvider } from "./context";

function App() {
  const [name] = useState({
    fname: "Akshay",
    lname: "Sharma",
    age: 25,
  });

  const [place] = useState({
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  });

  return (
    <div className="App">
      <UserProvider value={name}>
        <AddressProvider value={place}>
          <First />
        </AddressProvider>
      </UserProvider>
    </div>
  );
}

export default App;
