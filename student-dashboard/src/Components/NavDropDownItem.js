import React from "react";
import { NavDropdown } from "react-bootstrap";

const NavDropDownItem = (props) => {
  return (
    <div>
      {props.studentList.map((student, idx) => (
        <NavDropdown.Item
          id={`student-${idx}`}
          variant={"outline-secondary"}
          name={student.name}
          href={`#${student.name}`}
          eventKey={student.name}
          key={idx}
        >{`${student.name}`}</NavDropdown.Item>
      ))}
    </div>
  );
};

export default NavDropDownItem;
