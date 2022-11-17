import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import MessageWindow from "../components/MessageWindow";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg={9}>Test</Col>
          <Col lg={3}>
  
          </Col>
        </Row>
      </Container>
    </>
  );
}
