import React from "react";

const seasonConfig = {
  winter: {
    text: "It's cold",
    iconName: "snowflake",
  },
  summer: {
    text: "Let's go to the beach",
    iconName: "sun"
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
  const { text, iconName } = seasonConfig[season];

  return (
    <div style={ { display: "flex", justifyContent: "center" } }>
      <h1> Season is { season }</h1>
      <ul>
        You current:
        <li>latitude: { props.lat }</li >
        <li>longitude: { props.lon }</li>
      </ul>
      <h2>
        <i className={ `${iconName} icon` }></i>
        { text }
        <i className={ `${iconName} icon` }></i>
      </h2>
    </div >
  );
};

export default SeasonDisplay;
