import React from "react";
import classes from "./WeatherDaySmall.module.css";

export default function WeatherDaySmall(props) {
  return (
    <li className={classes.weatherItem}>
      <span>{props.weatherData.day}</span>
      <img className={classes.icon} src={props.weatherData.icon} alt="" />
      <span>
        <span className={classes.minTemp}>{props.weatherData.minTemp}</span>
        <span className={classes.maxTemp}>{props.weatherData.maxTemp}</span>
      </span>
    </li>
  );
}
