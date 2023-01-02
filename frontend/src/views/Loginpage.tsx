import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import RegisterA from "../components/login/RegisterA";
import RegisterB from "../components/login/RegisterB";

export default function Login() {
  const [showView, setView] = React.useState("L");

  if (showView === "L") {
    return (
      <>
        <Container fluid>
          <form action="/">
            <div id="login-field">
              <Row>
                <h1>Login</h1>
              </Row>
              <Row>
                <input placeholder="Username" type="email"></input>
              </Row>
              <Row>
                <input placeholder="Password" type="password"></input>
              </Row>
              <Row>
                <button
                  type="submit"
                  className="button button-primary"
                  id="login-loginBtn"
                >
                  Login
                </button>
              </Row>
              <Row>
                <button
                  className="button"
                  id="btn-register"
                  type="button"
                  onClick={() => setView("A")}
                >
                  Register
                </button>
              </Row>
            </div>
          </form>
        </Container>
      </>
    );
  } else if (showView === "A") {
    return <RegisterA setView={setView} />;
  } else if (showView === "B") {
    return <RegisterB setView={setView} />;
  } else {
    return <></>;
  }
}
