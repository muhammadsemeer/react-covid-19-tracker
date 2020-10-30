import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import India from "./Components/India/India";
import World from "./Components/World/World";
export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Route path ="/" exact component={India} />
        <Route path ="/world" exact component={World} />
      </Router>
      </>
    );
  }
}
