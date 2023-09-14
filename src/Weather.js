import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "coe6e57341e6f0t6a5bd2ccbd4a22e31";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1>{weatherInfo.city}</h1>
            <ul className="p-0 m-0">
              <li>
                <FormattedDate date={weatherInfo.date} />
              </li>
            </ul>
          </div>
          <div className="col-7">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row heading">
                <div className="col-8">
                  <input
                    type="search"
                    name="search-city"
                    className="form-control"
                    placeholder="Enter a city ..."
                    onChange={updateCity}
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
                <WeatherTemperature celsius={weatherInfo.temperature} />
              </div>
            </div>
            <h3>{weatherInfo.description}</h3>
          </div>
        </div>
        <div className="forecast-title">Next 6 days weather forecast</div>
        <WeatherForecast coordinates={weatherInfo.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <FallingLines
        color="#AD6CDA"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    );
  }
}
