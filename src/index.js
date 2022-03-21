import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./App.js";
import Search from "./Search";
import Currentdate from "./Currentdate";
import Note from "./Note";
import HumidityWind from "./HumidityWind";
function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <h1 id="city-name">Paris, France</h1>
        <ul>
          <span id="situation">
            {" "}
            <Currentdate />
            <li>Cloudy</li>
          </span>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt=""
              className="weather-icon"
            />
            <span className="temp">19</span>
            <span className="units">
              <a href="#">
                {" "}
                <span id="cel-link"> °C</span>
              </a>
              |
              <a href="#" id="degree-link">
                <span id="faren-link">°F</span>
              </a>
            </span>
          </div>
          <div className="col-6">
            <HumidityWind />
          </div>
        </div>
      </div>
      <Note />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
