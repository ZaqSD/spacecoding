import * as React from "react";

import { Container, Row } from "react-grid-system";

import Dialog from "@mui/material/Dialog";

export interface MessageDialogProps {
  title: string;
  content: string;
  type: string;
  button?: React.ReactElement;
  open: boolean;
  handleDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MessageDialog(props: MessageDialogProps) {
  return (
    <Dialog open={props.open}>
      <div className="message-dialog">
        <Container>
          <Row>
            <h1 className="message-title">{props.title}</h1>
          </Row>
          <Row>
            <p className="message-content">{props.content}</p>
          </Row>
          <Row>
            {props.button != null ? (
              props.button
            ) : (
              <button
                className="button button-primary message-button"
                id="btn-post"
                type="button"
                onClick={() => props.handleDialog(false)}
              >
                Okay
              </button>
            )}
          </Row>
        </Container>
      </div>
    </Dialog>
  );
}
