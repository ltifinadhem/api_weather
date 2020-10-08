import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import Time from "./components/time";

export default function App() {
  return (
    <div className="App">
      <h3>
        <Time />
      </h3>
      <div className="container">
        <Weather town="Sfax" />
        <Weather town="Paris" />
        <Weather town="London" />
        <Weather town="Madrid" />
        <Weather town="Setif" />
        <Weather town="Berlin" />
      </div>
    </div>
  );
}
