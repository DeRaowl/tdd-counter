import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  const handleDecrement = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>This is counter</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
