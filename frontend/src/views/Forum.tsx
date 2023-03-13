import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import CreatePostDialog from "../components/CreatePostDialog";
import ForumPost from "../components/ForumPost";
import MessageWindow from "../components/MessageWindow";
import NavBar from "../components/NavBar";

export default function Forum() {
  const [createPostOpen, setCreatePostOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([
    {
      title: "My newest Post",
      content: "This is the newest post in a line of many posts.",
      isLiked: true,
      likeNr: 12,
      commentNr: 2,
    },
    {
      title: "Hello World",
      content: "This is another post.",
      isLiked: true,
      likeNr: 879,
      commentNr: 0,
    },
    {
      title: "TestPost",
      content: "This is a post to test new functionalities.",
      isLiked: false,
      likeNr: 8,
      commentNr: 0,
    },
  ]);

  function handleCreatePost() {
    setCreatePostOpen(!createPostOpen);
  }

  function uploadPost() {
    setPosts((current) => [
      ...current,
      {
        title: "New Post",
        content: "I just created a new post",
        isLiked: false,
        likeNr: 0,
        commentNr: 0,
      },
    ]);
  }

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
                <button
                  className="button button-primary"
                  id="forum-btn-createPost"
                  onClick={handleCreatePost}
                >
                  Create Post
                </button>
                <CreatePostDialog
                  open={createPostOpen}
                  handleDialog={handleCreatePost}
                  create={uploadPost}
                />
              </Col>
            </Row>
            <Col lg={2}>
              <div></div>
            </Col>
            <Col>
              {posts.map(({ title, content, isLiked, likeNr, commentNr }) => (
                <Row key={title}>
                  <ForumPost
                    title={title}
                    content={content}
                    isLiked={isLiked}
                    likeNr={likeNr}
                    commentNr={commentNr}
                  />
                </Row>
              ))}
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
