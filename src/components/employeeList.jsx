import React, { Component } from "react";
import { getLaureates } from "../service/employeeDataset.js";
import { getFields } from "../service/fieldDataset";
import ListGroup from "./listGroup";
import _ from "lodash";

class EmployeeList extends Component {
  state = {
    laureates: getLaureates(),
    fields: getFields(),
    selectedField: null,
    sortColumn: "id",
  };

  handleFieldSelect = (field) => {
    this.setState({ selectedField: field });
  };

  handleSort = () => {
    var sortItem = this.state.sortColumn === "id" ? "firstname" : "id";

    this.setState({ sortColumn: sortItem });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-2 text-center">
          <ListGroup
            fields={this.state.fields}
            onItemSelect={this.handleFieldSelect}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>
                  First Name
                  <button
                    className="btn btn-secondary btn-sm ml-3"
                    onClick={() => {
                      this.handleSort("firstname");
                    }}
                  >
                    Sort
                  </button>
                </th>
                <th>Surname</th>
                <th>Origin</th>
                <th>Field</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.laureates
                .filter((laureate) => {
                  if (this.state.selectedField === null) {
                    return true;
                  }
                  if (laureate.field._id === this.state.selectedField) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .sort((a, b) => {
                  if (this.state.sortColumn === "id") {
                    if (a.id < b.id) {
                      return -1;
                    }
                    if (a.id > b.id) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;
                  } else if (this.state.sortColumn === "firstname") {
                    if (a.firstname < b.firstname) {
                      return -1;
                    }
                    if (a.firstname > b.firstname) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;
                  }
                })
                .map((laureate) => (
                  <tr key={laureate.id}>
                    <td>{laureate.firstname}</td>
                    <td>{laureate.surname}</td>
                    <td>{laureate.origin}</td>
                    <td>{laureate.field.name}</td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default EmployeeList;
