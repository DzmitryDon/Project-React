import React from "react";
import ReactDOM from "react-dom";
//import { useState } from "react";
import "./index.css";
import { CounterNumberClik } from "./Clicker";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <CounterNumberClik />,

  document.getElementById("root")
);

/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function sum() {
  return 10;
}

function App1() {
  return (
    <div>
      <Welcome name={0} />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App1 />, document.getElementById("root")); */

reportWebVitals();
