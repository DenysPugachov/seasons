import React from "react";

const Spinner = props => {
  return (
    <div style={{ height: "100vh" }} className="ui segment">
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.message}</div>
      </div>
    </div>
  );
};
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
