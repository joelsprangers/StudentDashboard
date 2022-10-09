import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const NavDropDownItem = (props) => {
  return (
    <div>
      <ButtonGroup
        vertical
        style={{
          color: "#000000",
          border: "0px",
          width: "100%",
          alignItems: "center",
        }}
      >
        {props.studentList.map((student, idx) => (
          <ToggleButton
            id={`student-${idx}`}
            type="checkbox"
            variant={"outline-secondary"}
            name={student.name}
            key={idx}
            style={{
              border: "0px",
              width: "100%",
              alignItems: "center",
            }}
            checked={student.isSelected}
            onChange={props.handleStudentChange}
          >{`${student.name}`}</ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default NavDropDownItem;
