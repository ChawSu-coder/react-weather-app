import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/82090-khin-chaw-su-han"
            target="_blank"
            alt="github link"
            rel="noreferrer"
          >
            Khin Chaw Su Han
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ChawSu-coder/weather-app-react"
            target="_blank"
            alt="github link"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
