import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import MessageWindow from "../components/MessageWindow";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isActivityPosts, setIsActivityPosts] = React.useState(true);

  const [userId, setUserId] = React.useState(1);
  const [isFollowed, setIsFollowed] = React.useState(false);

  const profileInformation = {
    id: 1,
    username: "testuser",
    pers_name: "Test User",
    pers_email: "testuser@email.com",
    pers_phonenumber: "(123) 456-7890",
    biz_position: "Software Engineer",
    biz_company: "Google",
    loc_city: "Zurich",
    loc_country: "CH",
    loc_timezone: "+1:00",
    followCount: 5,
    followerCount: 4,
  };

  function handleActivitySelector(view: string) {
    if (view === "p") {
      setIsActivityPosts(true);
    } else {
      setIsActivityPosts(false);
    }
  }

  function handleFollow() {
    isFollowed ? setIsFollowed(false) : setIsFollowed(true);
  }

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Row>
              <span
                className="profile-information"
                id="profile-information-name"
              >
                {profileInformation.pers_name}
              </span>
              <span id="profile-information-username">
                {"@" + profileInformation.username}
              </span>
            </Row>
            <Row>
              <div className="height-10"></div>
            </Row>
            <Row>
              {userId === profileInformation.id ? (
                <a
                  className="profile-information button"
                  id="profile-information-edit"
                  href="/profile/edit"
                >
                  Edit Information
                </a>
              ) : (
                <a
                  className={
                    isFollowed
                      ? "profile-information button"
                      : "profile-information button button-primary"
                  }
                  id="profile-information-follow"
                  onClick={handleFollow}
                >
                  {isFollowed ? "Followed" : "Follow"}
                </a>
              )}
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-followCount"
              >
                Follows
                <span className="profile-information-counter">
                  {" " + profileInformation.followCount}
                </span>
              </span>
              <span
                className="profile-information"
                id="profile-information-followerCount"
              >
                Followers
                <span className="profile-information-counter">
                  {" " + profileInformation.followerCount}
                </span>
              </span>
            </Row>
            <Row>
              <div className="height-10"></div>
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
              <div className="height-10"></div>
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
                {"at " + profileInformation.biz_company}
              </span>
            </Row>
            <Row>
              <div className="height-10"></div>
            </Row>
            <Row>
              <span
                className="profile-information"
                id="profile-information-city"
              >
                {profileInformation.loc_city +
                  ", " +
                  profileInformation.loc_country}
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
            <Row>
              <div className="height-10"></div>
            </Row>
          </Col>
          <Col lg={1}></Col>
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
