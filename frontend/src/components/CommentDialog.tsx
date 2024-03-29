import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import Comment from "./Comment";
import CreateCommentDialog from "./CreateCommentDialog";
import Dialog from "@mui/material/Dialog";

export interface CommentProps {
  postId: number;
  open: boolean;
  title: string;
  content?: string;
  isLiked: boolean;
  likeNr: number;
  handleLike: () => void;
  commentNr: number;
  handleDialog: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CommentDialog(props: CommentProps) {
  const [createCommentOpen, setCreateCommentOpen] = React.useState(false);
  const [commentList, setCommentList] = React.useState([
    {
      owner: "Andreas Siaplaouras",
      postId: 1,
      createdOn: "4d ago",
      content: "This is a quite well-formed post I really enjoyed reading it.",
    },
    {
      owner: "Luan Caduff",
      postId: 1,
      createdOn: "2d ago",
      content:
        "AcKtUaLlY, it is not your first post, it's your zero-th, CHECK YOUR FACTS.",
    },
    {
      owner: "Chris Traeger",
      postId: 2,
      createdOn: "5d ago",
      content: "AMAZING POST, LITERALLY the best post I've ever seen",
    },
  ]);

  function fetchComments() {
    return commentList;
  }

  function handleCreateCommentDialog() {
    createCommentOpen === true
      ? setCreateCommentOpen(false)
      : setCreateCommentOpen(true);
  }

  function uploadComment(content: string) {
    setCommentList((commentList) => [
      ...commentList,
      {
        owner: "Testuser",
        postId: props.postId,
        createdOn: "18:44",
        content: content,
      },
    ]);
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
              className={
                "forum-post-action forum-post-like" +
                (props.isLiked ? " liked" : " ")
              }
              onClick={props.handleLike}
            >
              <Row>
                Like{props.isLiked ? "d" : ""}
                <div className="forum-post-likeNr">{props.likeNr}</div>
              </Row>
            </button>
            <button className="forum-post-action">Share</button>
          </Row>
          <Row>
            <h3 id="forum-comment-commenttitle">
              Comments ({props.commentNr})
            </h3>
          </Row>
          <Row>
            <button
              className="button"
              id="forum-comment-createBtn"
              onClick={() => handleCreateCommentDialog()}
            >
              Create comment
            </button>
            <CreateCommentDialog
              open={createCommentOpen}
              handleDialog={handleCreateCommentDialog}
              post={uploadComment}
            />
          </Row>
          {comments.map(({ owner, postId, createdOn, content }) =>
            postId === props.postId ? (
              <Row key={content}>
                <Comment
                  owner={owner}
                  createdOn={createdOn}
                  content={content}
                />
              </Row>
            ) : (
              ""
            )
          )}
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
