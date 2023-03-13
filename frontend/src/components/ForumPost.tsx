import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import CommentDialog from "./CommentDialog";

interface ForumPostProps {
  title: string;
  content?: string;
  isLiked: boolean;
  likeNr: number;
  commentNr: number;
}
export default function ForumPost(props: ForumPostProps) {
  const [likeNr, setLikeNr] = React.useState(props.likeNr);
  const [liked, setLiked] = React.useState(props.isLiked);

  const [commentOpen, setCommentOpen] = React.useState(false);

  function handleCommentDialog() {
    setCommentOpen(!commentOpen);
  }

  function handleLike() {
    if (liked) {
      setLiked(false);
      setLikeNr(likeNr - 1);
    } else {
      setLiked(true);
      setLikeNr(likeNr + 1);
    }
  }

  return (
    <div className="forum-post">
      <Row>
        <p className="forum-post-title">{props.title}</p>
      </Row>
      <Row>
        <p className="forum-post-content">{props.content}</p>
      </Row>
      <Row>
        <button
          id="postLikeBtn"
          className={
            "forum-post-action forum-post-like" + (liked ? " liked" : " ")
          }
          onClick={handleLike}
        >
          <Row>
            Like{liked ? "d" : ""}
            <div className="forum-post-likeNr">{likeNr}</div>
          </Row>
        </button>
        <button className="forum-post-action" onClick={handleCommentDialog}>
          Comments ({props.commentNr})
        </button>
        <CommentDialog
          open={commentOpen}
          handleDialog={handleCommentDialog}
          title={props.title}
          content={props.content}
          isLiked={props.isLiked}
          likeNr={likeNr}
          handleLike={handleLike}
          commentNr={props.commentNr}
        />
        <button className="forum-post-action">Share</button>
      </Row>
    </div>
  );
}
