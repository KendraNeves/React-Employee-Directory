import React, { Component } from "react";
import Employee from "./employee";
import axios from "axios";

class EmployeeList extends Component {
  state = {};

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10`).then(
      (res) => {
        return res.json();
      }
      // this.setState({persons: res.data});
    );
  }

  render() {
    return <div>abc</div>;
    // <ul>{this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}</ul>
  }
}

export default EmployeeList;
