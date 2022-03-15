import React from "react";
import CheckBox from "./CheckBox";
import SelectMenu from "./SelectMenu";
import { Container, Row, Col } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SelectMenu />
        </Col>
        <Col>
          <CheckBox />
        </Col>
      </Row>
    </Container>
  );
};

export default NavMenu;
