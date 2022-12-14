import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import MessageWindow from "../components/MessageWindow";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isActivityPosts, setIsActivityPosts] = React.useState(true);

  const profileInformation = {
    username: "testuser",
    pers_name: "test user",
    pers_email: "email",
    pers_phonenumber: "(123) 456 7890",
    biz_position: "Software Engineer",
    biz_company: "Google",
    loc_city: "Zurich",
    loc_country: "CH",
    loc_timezone: "+1:00",
  };

  const handleActivitySelector = (view: string) => {
    if (view === "p") {
      setIsActivityPosts(true);
    } else {
      setIsActivityPosts(false);
    }
  };

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg={3}>
            <Row>
              <span
                className="profile-information"
                id="profile-information-name"
              >
                {profileInformation.pers_name}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-username"
              >
                {profileInformation.username}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-email"
              >
                {profileInformation.pers_email}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-phonenumber"
              >
                {profileInformation.pers_phonenumber}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-position"
              >
                {profileInformation.biz_position}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-company"
              >
                {profileInformation.biz_company}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-city"
              >
                {profileInformation.loc_city}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-country"
              >
                {profileInformation.loc_country}
              </span>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-timezone"
              >
                {profileInformation.loc_timezone}
              </span>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <div id="profile-activity-selector">
                <button
                  className={
                    isActivityPosts ? "button button-primary" : "button"
                  }
                  id="profile-activity-selector-posts"
                  onClick={() => handleActivitySelector("p")}
                >
                  Posts
                </button>
                <button
                  className={
                    isActivityPosts ? "button" : "button button-primary"
                  }
                  id="profile-activity-selector-challanges"
                  onClick={() => handleActivitySelector("c")}
                >
                  Challanges
                </button>
              </div>
            </Row>
          </Col>
          <Col lg={3}>
            <MessageWindow />
          </Col>
        </Row>
      </Container>
    </>
  );
}
