import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import GraphLogic from "./GraphLogic";

class NavDropDownItem extends Component {
  constructor() {
    super();
    this.state = {
      students: GraphLogic.uniqueStudentNames,
      assignments: GraphLogic.uniqueAssigmentNames,
      selectedStudent: "select student",
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState((prevState) => {
      console.log(this.state);
      return {
        selectedStudent: "test",
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.students.map((name) => (
          <NavDropdown.Item
            key={name}
            href={`/#action/${name}`}
          >{`${name}`}</NavDropdown.Item>
        ))}
        <NavDropdown.Item href="#action/all-students">
          all students
        </NavDropdown.Item>
      </div>
    );
  }
}

export default NavDropDownItem;
