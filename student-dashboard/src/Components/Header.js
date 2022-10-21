import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import SelectMenu from "./SelectMenu";
import CheckBox from "./CheckBox";

import logo from "../Assets/images/winc_logo.png";

const Header = (props) => {
  return (
    <div>
      <Row>
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                alt="winc_logo"
                src={logo}
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <SelectMenu
              studentList={props.studentList}
              updateSelectedStudent={props.updateSelectedStudent}
              currentStudent={props.currentStudent}
            />
            <CheckBox
              buttonList={props.buttonList}
              handleChange={props.handleChange}
            />
          </Container>
        </Navbar>
      </Row>
    </div>
  );
};

export default Header;
