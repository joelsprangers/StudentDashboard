import React from "react";
import { Navbar, Container } from "react-bootstrap";
import SelectMenu from "./SelectMenu";
import CheckBox from "./CheckBox";

import logo from "../Assets/images/winc_logo.png";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="winc_logo"
              src={logo}
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <SelectMenu />
          <CheckBox />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
