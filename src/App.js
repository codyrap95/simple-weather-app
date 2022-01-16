import logo from "./logo.svg";
import "./App.css";
import WeatherDayBig from "./components/WeatherDayBig";
import WeatherDaySmall from "./components/WeatherDaySmall";

function App() {
  let weatherData = {
    location: "San Francisco",
    text: "Clear",
    icon: logo,
    maxTemp: "11",
    minTemp: "8",
    currentTemp: "10",
    date: "May 25, 2021",
    day: "Monday",
  };

  return (
    <main className="main">
      <WeatherDayBig weatherData={weatherData}></WeatherDayBig>
      <ul id="forecastTable">
        <WeatherDaySmall weatherData={weatherData}></WeatherDaySmall>
        <WeatherDaySmall weatherData={weatherData}></WeatherDaySmall>
        <WeatherDaySmall weatherData={weatherData}></WeatherDaySmall>
        <WeatherDaySmall weatherData={weatherData}></WeatherDaySmall>
      </ul>
    </main>
  );
}

export default App;
