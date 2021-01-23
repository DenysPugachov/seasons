import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState(() => {
          return {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
        }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={ this.state.lat } lon={ this.state.lon } />;
    }

    return <Spinner message="Please accept location request..." />;
  }

  render() {
    return (
      <div>
        {this.renderContent() }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
