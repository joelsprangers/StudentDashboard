import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavDropDownItem from "./NavDropDownItem";

const SelectMenu = (props) => {
  return (
    <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <NavDropdown title={props.currentStudent} id="nav-dropdown">
            <NavDropDownItem
              studentList={props.studentList}
              handleStudentChange={props.handleStudentChange}
            />
          </NavDropdown>
          <Nav.Link href="#about">about</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};
export default SelectMenu;
