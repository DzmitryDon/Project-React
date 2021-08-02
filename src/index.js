import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";
import { CounterNumberClik } from "./Clicker";
import reportWebVitals from "./reportWebVitals";

/* function CounterNumberClikForTimes() {
  CounterNumberClik();
  CounterNumberClik();
} */

ReactDOM.render(
  <CounterNumberClik />,

  document.getElementById("root")
);

reportWebVitals();
