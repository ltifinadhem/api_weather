import React from "react";
import "../components/CardStyles.css";

export default function WeatherCard(props) {
  return (
    <div>
      <div className="card">
        <h2>
          {props.name},{props.country}
        </h2>
        <h3>
          <span className="dot">•</span>
          {props.main}
          <span className="dot">•</span>
          <span>
            Wind {props.wind} km/h <span className="dot">•</span> <br />
            <span className="dot">•</span> Precip {props.precip}%{" "}
            <span className="dot">•</span>
          </span>
        </h3>
        <h1>{props.temp}°</h1>
        <div class="sky">
          <img
            className="sun"
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt="pic"
          />
        </div>
        <table>
          <tr>
            <td>{props.hr1}:00</td>
            <td>{props.hr2}:00</td>
            <td>{props.hr3}:00</td>
          </tr>
          <tr>
            <td>
              <img
                src={`http://openweathermap.org/img/w/${props.icon1}.png`}
                alt="pic"
              />
            </td>
            <td>
              <img
                src={`http://openweathermap.org/img/w/${props.icon2}.png`}
                alt="pic"
              />
            </td>
            <td>
              <img
                src={`http://openweathermap.org/img/w/${props.icon3}.png`}
                alt="pic"
              />
            </td>
          </tr>
          <tr>
            <td>{props.temp1}°</td>
            <td>{props.temp2}°</td>
            <td>{props.temp3}°</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
