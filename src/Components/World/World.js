import React, { Component } from "react";
import "./world.css";
export default class World extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((res) => res.json())
      .then((response) => {
        if (response) {
          this.setState({ data: response, isLoaded: true });
        } else {
          this.setState({ isLoaded: false });
        }
      });
  }
  formatDate(string) {
    return new Date(string).toLocaleString();
  }
  render() {
    const { data, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="world">
          <h1>World</h1>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Confirmed</th>
                  <th>Active</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Updated on</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        {item.country}
                        <img
                          src={item.countryInfo.flag}
                          alt={item.country}
                          style={{ width: "50px", height: "25px" }}
                        />
                      </td>
                      <td>{item.cases}</td>
                      <td>{item.active}</td>
                      <td>{item.recovered}</td>
                      <td>{item.deaths}</td>
                      <td>{new Date(item.updated).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "75px" }}>
          <h1>Loading</h1>
        </div>
      );
    }
  }
}
