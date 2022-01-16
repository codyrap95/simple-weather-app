import logo from "./logo.svg";
import "./App.css";
import WeatherDayBig from "./components/WeatherDayBig";

function App() {
  let weatherData = {
    location: "San Francisco",
    text: "Clear",
    icon: logo,
    maxTemp: "11",
    minTemp: "8",
    currentTemp: "10",
    date: "May 25, 2021",
  };
  return (
    <main className="main">
      <WeatherDayBig weatherData={weatherData}></WeatherDayBig>
    </main>
  );
}

export default App;
