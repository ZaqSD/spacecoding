import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

export default function Login() {
  return (
    <>
      <Container fluid>
        <div id="login-field">
          <form method="POST" action="/">
            <Row>
              <h1>Login</h1>
            </Row>
            <Row>
              <input placeholder="Username" type="email"></input>
            </Row>
            <Row>
              <input placeholder="Password" type="password"></input>
            </Row>
          </form>
          <Row>
            <button type="submit" className="button" id="btn-login">
              Login
            </button>
          </Row>
          <Row>
            <button className="button" id="btn-register">
              Register
            </button>
          </Row>
        </div>
      </Container>
    </>
  );
}
