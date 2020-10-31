import React, { Component } from "react";
import State from "../States/State";
import "./india.css";
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
      <div className="main-india">
        <div className="head">
          <h1>India</h1>
          <img
            src="https://www.countryflags.io/in/shiny/64.png"
            alt="Indian Flag"
          />
        </div>
        <div className="india-status">
          <div className="confirm">
            <h2>Confirmed</h2>
            <p>{info.cases}</p>
          </div>
          <div className="active">
            <h2>Active</h2>
            <p>{info.active}</p>
          </div>
          <div className="recover">
            <h2>Recovered</h2>
            <p>{info.recovered}</p>
          </div>
          <div className="death">
            <h2>Deaths</h2>
            <p>{info.deaths}</p>
          </div>
        </div>
        <div>
          <State />
        </div>
      </div>
    );
  }
}
