import * as React from "react";

import { Container, Row } from "react-grid-system";

import Dialog from "@mui/material/Dialog";

export interface CreateCommentDialogProps {
  open: boolean;
  handleDialog: () => void;
  post: (content: string) => void;
}

export default function SimpleDialog(props: CreateCommentDialogProps) {
  const inputElement = document.getElementById(
    "forum-createComment-input"
  ) as HTMLInputElement;

  function handleSubmit() {
    props.post(inputElement.value);
    props.handleDialog();
  }

  return (
    <Dialog open={props.open}>
      <div className="forum-dialog">
        <form method="post" action="createpost.php">
          <Container>
            <Row>
              <h1>Create new Comment</h1>
            </Row>
            <Row>
              <input
                className="textfield createPost-input"
                id="forum-createComment-input"
                name="comment"
                placeholder="Comment"
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
                Create
              </button>
              <button
                className="button"
                id="btn-cancel"
                type="button"
                onClick={() => props.handleDialog()}
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
