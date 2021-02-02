import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: {
    counter: 10,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementFirst":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "decrementFirst":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case "incrementSecond":
      return {
        ...state,
        secondCounter: {
          ...state.secondCounter,
          counter: state.secondCounter.counter + action.value,
        },
      };
    case "decrementSecond":
      return {
        ...state,
        secondCounter: {
          ...state.secondCounter,
          counter: state.secondCounter.counter + action.value,
        },
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log(count);
  return (
    <div>
      <div>First Counter : {count.firstCounter}</div>
      <h2>Secound Counter : {count.secondCounter.counter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "incrementFirst", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrementFirst", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "incrementSecond", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrementSecond", value: 5 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterTwo;
