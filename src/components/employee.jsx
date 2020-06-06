import React, { Component } from "react";
import { getLaureates } from "../peopleDataset.js";

class Employee extends Component {
  state = {
    laureates: getLaureates(),
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Origin</th>
              <th>Field</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.laureates.map((laureate) => (
              <tr key={laureate.id}>
                <td>{laureate.photo}</td>
                <td>{laureate.firstname}</td>
                <td>{laureate.surname}</td>
                <td>{laureate.origin}</td>
                <td>{laureate.field}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Employee;
