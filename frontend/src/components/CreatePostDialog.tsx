import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import $ from "jquery";
import Dialog from "@mui/material/Dialog";

jQuery(function () {
  console.log(222);
});
export interface CreatePostDialogProps {
  open: boolean;
  handleDialog: React.MouseEventHandler<HTMLButtonElement>;
  create: () => void;
}

export default function CreatePostDialog(props: CreatePostDialogProps) {
  function handleSubmit() {
    props.create();

    // JQuery ajax request
    $.post("localhost:8000/ajax.php", function (title) {
      document.getElementById("");
      alert(title);
    });
  }

  return (
    <Dialog open={props.open}>
      <div className="forum-dialog">
        <form method="post">
          <input name="post-create" hidden></input>
          <Container>
            <Row>
              <h1>Create new Post</h1>
            </Row>
            <Row>
              <input
                className="textfield createPost-input"
                name="title"
                placeholder="Title"
                type="text"
              ></input>
            </Row>
            <Row>
              <input
                className="textfield createPost-input"
                name="content"
                placeholder="Content"
                type="text"
              ></input>
            </Row>
            <Row>
              <button
                className="button button-primary"
                id="btn-post"
                type="submit"
                onClick={handleSubmit}
              >
                Post
              </button>
              <button
                className="button"
                id="btn-cancel"
                type="button"
                onClick={props.handleDialog}
              >
                Cancel
              </button>
            </Row>
          </Container>
        </form>
      </div>
    </Dialog>
  );
}
