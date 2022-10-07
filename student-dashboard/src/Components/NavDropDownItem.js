import React from "react";
import { NavDropdown } from "react-bootstrap";

const NavDropDownItem = (props) => {
  return (
    <div>
      {props.studentList.map((name, idx) => (
        <NavDropdown.Item
          name={name}
          key={idx}
          onSelect={props.handleStudentchange}
          href={`/#action/${name}`}
        >{`${name}`}</NavDropdown.Item>
      ))}
      <NavDropdown.Item
        onSelect={props.handleStudentchange}
        href="#action/all-students"
      >
        all students
      </NavDropdown.Item>
    </div>
  );
};

export default NavDropDownItem;
