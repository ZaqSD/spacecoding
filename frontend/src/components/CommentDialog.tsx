import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import Comment from "./Comment";
import Dialog from "@mui/material/Dialog";

export interface CommentProps {
  open: boolean;
  title: string;
  content?: string;
  isLiked: boolean;
  likeNr: number;
  handleLike: () => void;
  commentNr: number;
  handleDialog: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SimpleDialog(props: CommentProps) {
  function fetchComments() {
    const comments = [
      {
        owner: "Andreas Siaplaouras",
        createdOn: "4d ago",
        content:
          "This is a quite well-formed post I really enjoyed reading it.",
      },
      {
        owner: "Luan Caduff",
        createdOn: "2d ago",
        content:
          "AcKtUaLlY, it is not your first post, it's your zero-th, CHECK YOUR FACTS.",
      },
    ];

    return comments;
  }

  const comments = fetchComments();

  return (
    <Dialog open={props.open}>
      <div className="forum-dialog" id="forum-comment-dialog">
        <Container>
          <Row>
            <h3>
              <b>{props.title}</b>
            </h3>
          </Row>
          <Row>
            <p>{props.content}</p>
          </Row>
          <Row>
            <button
              id="postLikeBtn"
              className={"forumPostAction" + (props.isLiked ? " liked" : " ")}
              onClick={props.handleLike}
            >
              Like ({props.likeNr})
            </button>
            <button className="forumPostAction">Share</button>
          </Row>
          <Row>
            <h3 id="forum-comment-commenttitle">
              Comments ({props.commentNr})
            </h3>
          </Row>
          <Row>
            <form>
              <input
                className="textfield"
                id="forum-comment-create"
                name="form-comment-create"
                placeholder="New Comment"
                type="text"
              ></input>
              <button
                className="button button-primary"
                id="forum-comment-createbtn"
                type="submit"
              >
                Post
              </button>
            </form>
          </Row>
          {comments.map(({ owner, createdOn, content }) => (
            <Row>
              <Comment owner={owner} createdOn={createdOn} content={content} />
            </Row>
          ))}
          <Row>
            <button
              className="button"
              id="btn-cancel"
              type="button"
              onClick={props.handleDialog}
            >
              Close
            </button>
          </Row>
        </Container>
      </div>
    </Dialog>
  );
}
