import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <h1>London</h1>
          <p>Sunday, 10:00</p>
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
            <li>Humidity : 88%</li>
            <li>Wind : 4km/h</li>
            <li>Pressure : 1012hPa</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex weatherTemperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny day"
              id="icon"
            />
            <div>
              <strong>19</strong>
              <span className="units">°C | °F</span>
            </div>
          </div>
          <h3>Mostly Cloudy</h3>
        </div>
      </div>
    </div>
  );
}
