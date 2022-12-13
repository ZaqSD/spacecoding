import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import CountryDropdown from "../components/CountryDropdown";
import NavBar from "../components/NavBar";
import TimezoneDropdown from "../components/TimezoneDropdown";

const username = "testuser";
const pers_name = "test user";
const pers_email = "email";
const pers_phonenumber = "(123) 456 7890";
const biz_position = "Software Engineer";
const biz_company = "Google";
const loc_city = "Zurich";
const loc_country = "CH";
const loc_timezone = "+1";

export default function Profile() {
  const fetchData = () => {};

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Row>
              <h3>Personal Information</h3>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="Username"
                value={username != null ? username : ""}
              ></input>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="Full name"
                value={pers_name != null ? pers_name : ""}
              ></input>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="E-Mail"
                value={pers_email != null ? pers_email : ""}
              ></input>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="Phonenumber"
                value={pers_phonenumber != null ? pers_phonenumber : ""}
              ></input>
            </Row>
            <Row>
              <h3>Work Information</h3>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="Position"
                value={biz_position != null ? biz_position : ""}
              ></input>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="Company"
                value={biz_company != null ? biz_company : ""}
              ></input>
            </Row>
            <Row>
              <h3></h3>
            </Row>
            <Row>
              <input
                className="textfield profile-edit-input"
                placeholder="City"
                value={loc_city != null ? loc_city : ""}
              ></input>
            </Row>
            <Row>
              <CountryDropdown />
            </Row>
            <Row>
              <TimezoneDropdown />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
