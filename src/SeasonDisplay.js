import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "It's cold",
    iconName: "snowflake",
    iconColor: "blue",
  },
  summer: {
    text: "Let's go to the beach",
    iconName: "sun",
    iconColor: "red",
  },
};

const getSeason = (lat, month) => {
  //month 3-8 ?
  if (month > 2 && month < 9) {
    return lat < 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  //use seasonConfig to pass the value
  const { text, iconName, iconColor } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h1>
        It is {season} and {text}
      </h1>

      <i className={`icon-left ${iconName} icon huge ${iconColor}`}></i>
      <i className={`icon-right ${iconName} icon huge ${iconColor}`}></i>

      <ul className={"coordinates"}>
        You current:
        <li>latitude: {props.lat}</li>
        <li>longitude: {props.lon}</li>
      </ul>
    </div>
  );
};

export default SeasonDisplay;
