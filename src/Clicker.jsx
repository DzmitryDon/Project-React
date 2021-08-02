import React from "react";
import "./index.css";
import { useState } from "react";

export function CounterNumberClik() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className="bigSquare">
      <div className="numeroSquare">{count}</div>
      <div className="buttomSquare">
        <button className="buttomPlus" onClick={() => setCount(count + 1)}>
          <i className="buttomPlusI"> + </i>
        </button>
        <button className="buttomNull" onClick={() => setCount(initialCount)}>
          <i className="buttomNullI"> Reset </i>
        </button>
        <button className="buttomMinus" onClick={() => setCount(count - 1)}>
          <i className="buttomMinusI"> - </i>
        </button>
      </div>
    </div>
  );
}
