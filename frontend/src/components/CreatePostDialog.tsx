import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import Dialog from "@mui/material/Dialog";

export interface CreatePostDialogProps {
  open: boolean;
  handleDialog: React.MouseEventHandler<HTMLButtonElement>;
  create: () => void;
}

export default function SimpleDialog(props: CreatePostDialogProps) {
  const handleListItemClick = (value: string) => {};

  const handleSubmit = () => {
    props.create();
  };

  return (
    <Dialog open={props.open}>
      <div id="forum-createDialog">
        <form method="post" action="createpost.php">
          <Container>
            <Row>
              <h1>Create new Post</h1>
            </Row>
            <Row>
              <input
                className="textfield"
                name="title"
                placeholder="Title"
                type="text"
              ></input>
            </Row>
            <Row>
              <input
                className="textfield"
                name="content"
                placeholder="Content"
                type="text"
              ></input>
            </Row>
            <Row>
              <button
                className="button"
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
