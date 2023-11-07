import React, { useState, useEffect } from "react";
import Snabbdom from "snabbdom";

const Counter = (state,props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, [count]);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAddClick}>ADD</button>
    </div>
  );
};

export default Counter;
