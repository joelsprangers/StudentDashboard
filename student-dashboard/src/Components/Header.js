import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import SelectMenu from "./SelectMenu";
import CheckBox from "./CheckBox";

import logo from "../Assets/images/winc_logo.png";

const Header = (props) => {
  return (
    <Row>
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
          <CheckBox
            buttonList={props.buttonList}
            handleChange={props.handleChange}
          />
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;
