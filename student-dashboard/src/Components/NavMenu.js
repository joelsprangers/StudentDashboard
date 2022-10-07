import React from "react";
import CheckBox from "./CheckBox";
import SelectMenu from "./SelectMenu";
import { Container, Row, Col } from "react-bootstrap";

const NavMenu = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <SelectMenu
            studentList={props.studentList}
            handleStudentchange={props.handleStudentchange}
          />
        </Col>
        <Col>
          <CheckBox
            buttonList={props.buttonList}
            handleChange={props.handleChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NavMenu;
