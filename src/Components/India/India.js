import React, { Component } from "react";
import State from "../States/State";

export default class India extends Component {
  state = {
    info: {},
  };
  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries/india")
      .then((res) => res.json())
      .then((response) => {
        this.setState({ info: response });
      });
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <div>
          <h1>India</h1>
          <img
            src="https://www.countryflags.io/in/shiny/64.png"
            alt="Indian Flag"
          />
          <h1>
            <span style={{ marginRight: "10px" }}>Confirmed: {info.cases}</span>
            <span style={{ marginRight: "10px" }}>Active: {info.active}</span>
            <span style={{ marginRight: "10px" }}>
              Recovered: {info.recovered}
            </span>
            <span style={{ marginRight: "10px" }}>Deaths: {info.deaths}</span>
          </h1>
        </div>
        <div>
          <State />
        </div>
      </div>
    );
  }
}
