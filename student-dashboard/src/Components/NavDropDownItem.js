import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import data from "../Assets/data/student-information.json";

const studentNames = data.map((student) => {
  const studentName = student["Wie ben je?"];
  return studentName;
});

class NavDropDownItem extends Component {
  constructor() {
    super();
    this.state = {
      students: [...new Set(studentNames)],
      selectedStudent: "select student",
    };
    console.log(this.state);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    console.log(event.value);
    this.setState((prevState) => {
      console.log(this.state.selectedStudent);
      return {
        selectedStudent: event.value,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.students.map((name) => (
          <NavDropdown.Item
            key={name}
            href={`#action/${name}`}
            onClick={this.onClick}
            value="guidoo"
            name="poep"
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
