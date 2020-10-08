import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

export default function Weather(props) {
  const [weather, setweather] = useState({});
  const key = "9276c2cfee15b4df7e14d50e99400651";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.town}&appid=${key}`
      )
      .then(function (response) {
        let data = response.data;
        return data;
      })
      .then(function (data) {
        setweather({
          name: data.city.name,
          country: data.city.country,
          main: data.list[0].weather[0].description,
          wind: data.list[0].wind.speed,
          precip: data.list[0].clouds.all,
          temp: data.list[0].main.temp,
          icon: data.list[0].weather[0].icon,
          hr1: new Date(data.list[1].dt_txt).getHours(),
          hr2: new Date(data.list[2].dt_txt).getHours(),
          hr3: new Date(data.list[3].dt_txt).getHours(),
          temp1: data.list[1].main.temp,
          temp2: data.list[2].main.temp,
          temp3: data.list[3].main.temp,
          icon1: data.list[1].weather[0].icon,
          icon2: data.list[2].weather[0].icon,
          icon3: data.list[3].weather[0].icon
        });
        console.log(data);
      });
  }, []);

  return (
    <div>
      <WeatherCard
        name={weather.name}
        country={weather.country}
        main={weather.main}
        wind={Math.round(weather.wind * 3.6)}
        precip={weather.precip}
        temp={Math.round(weather.temp - 273)}
        icon={weather.icon}
        hr1={weather.hr1}
        hr2={weather.hr2}
        hr3={weather.hr3}
        temp1={Math.round(weather.temp1 - 273)}
        temp2={Math.round(weather.temp2 - 273)}
        temp3={Math.round(weather.temp3 - 273)}
        icon1={weather.icon1}
        icon2={weather.icon2}
        icon3={weather.icon3}
      />
    </div>
  );
}
