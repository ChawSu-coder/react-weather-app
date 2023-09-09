import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.city,
      date: "Sunday, 10:00",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1>{weatherInfo.city}</h1>
            <p>{weatherInfo.date}</p>
          </div>
          <div className="col-7">
            <form className="search-form">
              <div className="row heading">
                <div className="col-8">
                  <input
                    type="search"
                    name="search-city"
                    className="form-control"
                    placeholder="Enter a city ..."
                  />
                </div>
                <div className="col-2">
                  <button type="submit" value="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button type="button">
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row overview">
          <div className="col-6">
            <ul className="description">
              <li>Humidity : {weatherInfo.humidity}%</li>
              <li>Wind : {weatherInfo.wind}km/h</li>
              <li>Pressure : {weatherInfo.pressure}hPa</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="d-flex weatherTemperature">
              <img
                src={weatherInfo.iconUrl}
                alt={weatherInfo.description}
                id="icon"
              />
              <div>
                <strong>{Math.round(weatherInfo.temperature)}</strong>
                <span className="units">°C | °F</span>
              </div>
            </div>
            <h3>{weatherInfo.description}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "coe6e57341e6f0t6a5bd2ccbd4a22e31";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    <FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />;
  }
}
