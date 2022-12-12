import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Padding } from "@mui/icons-material";

export interface CreatePostDialogProps {
  open: boolean;
  handleDialog: React.MouseEventHandler<HTMLAnchorElement>;
  create: () => void;
}

export default function SimpleDialog(props: CreatePostDialogProps) {
  const handleListItemClick = (value: string) => {};

  const handleSubmit = () => {
    props.create();
  };

  return (
    <Dialog open={props.open}>
      <Row>
        <h1>Create new Post</h1>
        <Col>
          <Row>
            <input className="profile-edit-input" placeholder="Title"></input>
          </Row>
          <Row>
            <input className="profile-edit-input" placeholder="Content"></input>
          </Row>
          <Row>
            <a className="button buttonUpload" onClick={handleSubmit}>
              Post
            </a>
            <a className="button buttonUpload" onClick={props.handleDialog}>
              Cancel
            </a>
          </Row>
        </Col>
      </Row>
    </Dialog>
  );
}
