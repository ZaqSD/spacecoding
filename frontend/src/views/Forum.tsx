import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import ForumPost from "../components/ForumPost";
import MessageWindow from "../components/MessageWindow";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col lg={9}>
            <Row>
              <Col lg={10}>
                <h1>Forum</h1>
              </Col>
              <Col lg={2}>
                <button className="button buttonUpload">Create Post</button>
              </Col>
            </Row>
            <Col lg={2}>
              <div></div>
            </Col>
            <Col>
              <Row>
                <ForumPost
                  title="My newest Post"
                  content="This is the newest post in a line of many posts."
                  isLiked={true}
                  likeNr={12}
                  commentNr={2}
                />
              </Row>
              <Row>
                <ForumPost
                  title="Hello World"
                  content="This is another post."
                  isLiked={true}
                  likeNr={879}
                  commentNr={0}
                />
              </Row>
              <Row>
                <ForumPost
                  title="TestPost"
                  content="This is a post to test new functionalities."
                  isLiked={false}
                  likeNr={7}
                  commentNr={0}
                />
              </Row>
            </Col>
          </Col>
          <Col lg={3}>
            <MessageWindow />
          </Col>
        </Row>
      </Container>
    </>
  );
}
