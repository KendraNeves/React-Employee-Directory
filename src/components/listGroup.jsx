import React from "react";

function ListGroup(props) {
  return (
    <ul className="list-group">
      <li
        className="list-group-item"
        onClick={() => {
          props.onItemSelect(null);
        }}
      >
        All Fields
      </li>
      {props.fields.map((field) => {
        return (
          <li
            className="list-group-item"
            onClick={() => {
              props.onItemSelect(field._id);
            }}
          >
            {field.name}
          </li>
        );
      })}
    </ul>
  );
}

export default ListGroup;
