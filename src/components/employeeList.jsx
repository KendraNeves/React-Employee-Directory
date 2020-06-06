import React, { Component } from "react";
import { getLaureates } from "../service/employeeDataset.js";
import { getFields } from "../service/fieldDataset";
import ListGroup from "./listGroup";

class EmployeeList extends Component {
  state = {
    laureates: getLaureates(),
    fields: getFields(),
    selectedField: null,
  };

  handleFieldSelect = (field) => {
    this.setState({ selectedField: field });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-2">
          <ListGroup
            fields={this.state.fields}
            onItemSelect={this.handleFieldSelect}
          />
        </div>
        <div className="col-12 col-md-10">
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
                .map((laureate) => (
                  <tr key={laureate.id}>
                    <td>{laureate.photo}</td>
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
      </div>
    );
  }
}

export default EmployeeList;
