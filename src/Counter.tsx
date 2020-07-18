import { isPrimitive } from "util";
import { ifError } from "assert";

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1> {count} </h1>
      <div>
        <button onClick={addCount}>+1</button>
        <button onClick={removeCount}>+2</button>
      </div>
    </div>
  );
}

export default Counter;
