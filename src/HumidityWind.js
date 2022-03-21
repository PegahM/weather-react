import React from "react";
import "./HumidityWind.css";

export default function HumidityWind() {
  return (
    <ul className="HumidityWind">
      <li>
        Humidity: <span id="humidity">64</span>%
      </li>
      <li>
        Wind: <span id="wind">6</span> km/h
      </li>
    </ul>
  );
}
