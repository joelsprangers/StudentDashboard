import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavDropDownItem from "./NavDropDownItem";

const SelectMenu = () => {
  return (
    <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <NavDropdown title="select student" id="basic-nav-dropdown">
            <NavDropDownItem />
          </NavDropdown>
          <Nav.Link href="#all-students">all students</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
};
export default SelectMenu;
