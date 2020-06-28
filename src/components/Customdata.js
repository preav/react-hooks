import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Customdata() {
  const [item, setItem] = useState({});
  const [number, setNumer] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((Res) => {
        console.log(Res.data);
        setItem(Res.data);
      })
      .catch((err) => console.log(err));
  }, [buttonId]);

  const buttonClicked = () => {
    setButtonId(number);
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumer(e.target.value)}
      />
      {item.title}
      <div>
        <button onClick={buttonClicked}>Click</button>
      </div>
    </div>
  );
}
