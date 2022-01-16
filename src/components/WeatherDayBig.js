import React from "react";
import classes from "./WeatherDayBig.module.css";

export default function WeatherDayBig(props) {
  return (
    <div className={classes.currentDay}>
      <h1 className={classes.location}>{props.weatherData.location}</h1>
      <h2 className={classes.text}>{props.weatherData.text}</h2>
      <img className={classes.icon} src={props.weatherData.icon} alt="sunny" />
      <h3 className={classes.date}>{props.weatherData.date}</h3>
    </div>
  );
}
