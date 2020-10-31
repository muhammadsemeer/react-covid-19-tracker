import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Covid-19 Tracker</h1>
          <Link to="/">India</Link>
          <Link to="/world">World</Link>
      </div>
    );
  }
}
