import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

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

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeNr(likeNr - 1);
    } else {
      setLiked(true);
      setLikeNr(likeNr + 1);
    }
  };

  return (
    <div className="forumPost">
      <Row>
        <p className="forumPostTitle">{props.title}</p>
      </Row>
      <Row>
        <p className="forumPostContent">{props.content}</p>
      </Row>
      <Row>
        <button
          id="postLikeBtn"
          className={"forumPostAction" + (liked ? " liked" : " ")}
          onClick={handleLike}
        >
          Like ({likeNr})
        </button>
        <button className="forumPostAction">
          Comments ({props.commentNr})
        </button>
        <button className="forumPostAction">Share</button>
      </Row>
    </div>
  );
}
