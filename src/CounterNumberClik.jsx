import React from "react";
import "./index.css";
import { useState } from "react";

export function CounterNumberClik() {
  const initialCount = 0;

  const [count1, setCount1] = useState(initialCount);
  const [count2, setCount2] = useState(initialCount);
  const [count3, setCount3] = useState(initialCount);

  return (
    <div className="clickerLine">
      <ClickerOne
        initialCount={initialCount}
        count={count1}
        setCount={setCount1}
      />
      <ClickerOne
        initialCount={initialCount}
        count={count2}
        setCount={setCount2}
      />
      <ClickerOne
        initialCount={initialCount}
        count={count3}
        setCount={setCount3}
      />
    </div>
  );
}

function ClickerOne({ count, initialCount, setCount }) {
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
