import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import Dialog from "@mui/material/Dialog";

export interface CreatePostDialogProps {
  open: boolean;
  handleDialog: React.MouseEventHandler<HTMLButtonElement>;
  create: () => void;
}

export default function SimpleDialog(props: CreatePostDialogProps) {
  function handleListItemClick(value: string) {}

  function handleSubmit() {
    props.create();
  }

  return (
    <Dialog open={props.open}>
      <div className="forum-dialog">
        <form method="post" action="../../../backend/ajax.php">
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
