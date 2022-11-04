import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import NavDropDownItem from "./NavDropDownItem";

const SelectMenu = (props) => {
  return (
    <div>
      <Nav onSelect={props.updateSelectedStudent} className="me-auto">
        <Nav.Link href="home">home</Nav.Link>
        <NavDropdown title={props.currentStudent} id="nav-dropdown">
          <NavDropDownItem studentList={props.studentList} />
        </NavDropdown>
      </Nav>
    </div>
  );
};
export default SelectMenu;
