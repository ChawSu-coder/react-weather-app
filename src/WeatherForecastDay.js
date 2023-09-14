import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <img src={props.icon} className="forecast-img" />
      <div className="weather-forecast-temperature">
        <span className="max-temperature">{maxTemperature()}</span>
        <span className="min-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
