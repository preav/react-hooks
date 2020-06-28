import React, { useState, useEffect } from "react";
import axios from "axios";
import Customdata from "./Customdata";

const Datafetch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((Res) => {
      console.log(Res.data);
      setItems(Res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Customdata />
    </div>
  );
};

export default Datafetch;
