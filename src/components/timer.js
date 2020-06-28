import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter((previouscounter) => previouscounter + 1);
  };

  useEffect(() => {
    const add = setInterval(tick, 1000);
    return () => {
      clearInterval(add);
    };
  });
  return <div>{counter}</div>;
};

export default Timer;
