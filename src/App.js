import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import India from "./Components/India/India";
import World from "./Components/World/World";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route path="/" exact component={India} />
          <Route path="/world" exact component={World} />
        </Router>
      </>
    );
  }
}
