import { Col, Container, Row } from "react-grid-system";

interface CommentProps {
  owner: string;
  createdOn: string;
  content: string;
}
export default function Comment(props: CommentProps) {
  return (
    <div id="forum-comment">
      <Row>
        <span id="forum-comment-owner">{props.owner + " "}</span>
        <span id="forum-comment-date">{props.createdOn}</span>
      </Row>
      <Row>
        <span id="forum-comment-content"> {props.content}</span>
      </Row>
    </div>
  );
}
