import React, { Component } from "react";

export default class State extends Component {
  state = {
    stateData: {},
  };
  componentDidMount() {
    fetch("https://api.covid19india.org/state_district_wise.json")
      .then((res) => res.json())
      .then((response) => {
        this.setState({ stateData: response });
      });
  }
  render() {
    const { stateData } = this.state;
    delete stateData.state;
    let keys = Object.keys(stateData);
    return keys.map((item, key) => {
      let districts = stateData[item].districtData;
      let total_active = 0;
      let total_confirmed = 0;
      let total_death = 0;
      let total_recovered = 0;

      let district_list = [];
      for (let x in districts) {
        total_active += districts[x].active;
        total_confirmed += districts[x].confirmed;
        total_active += districts[x].deceased;
        total_active += districts[x].recovered;
        let ob = districts[x];
        ob["district_name"] = x;
        district_list = [...district_list, ob];
      }
      if (key === 0) {
        return false;
      }
      return (
        <div key={key}>
          <h3>
            {item}{" "}
            <span style={{ marginRight: "10px" }}>
              Confirmed: {total_confirmed}
            </span>
            <span style={{ marginRight: "10px" }}>Active : {total_active}</span>
            <span style={{ marginRight: "10px" }}>
              Recovered: {total_recovered}
            </span>
            <span style={{ marginRight: "10px" }}>Death: {total_death}</span>
          </h3>
          <table>
            <thead>
              <tr>
                <th>District</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {district_list.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.district_name}</td>
                    <td>{item.confirmed}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deceased}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  }
}
