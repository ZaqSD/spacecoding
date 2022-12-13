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
        <Container>
          <Row>
            <h1>Create new Post</h1>
          </Row>
          <Row>
            <input className="textfield" placeholder="Title"></input>
          </Row>
          <Row>
            <input className="textfield" placeholder="Content"></input>
          </Row>
          <Row>
            <button className="button" id="btn-post" onClick={handleSubmit}>
              Post
            </button>
            <button
              className="button"
              id="btn-cancel"
              onClick={props.handleDialog}
            >
              Cancel
            </button>
          </Row>
        </Container>
      </div>
    </Dialog>
  );
}
