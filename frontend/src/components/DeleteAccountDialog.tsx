import * as React from "react";

import Dialog from "@mui/material/Dialog";
import { Row } from "react-grid-system";

export interface MessageDialogProps {
  open: boolean;
  isConfirmed: (isConfirmed: boolean) => void;
}

export default function SimpleDialog(props: MessageDialogProps) {
  return (
    <Dialog open={props.open}>
      <div className="message-dialog margin-10">
        <Row>
          <h1 className="message-title">Are you sure?</h1>
        </Row>
        <Row>
          <p className="message-content">
            You are about to <b id="deleteAcc-delete">DELETE</b> your account.
            <br />
            This may not be reversable and your data will be lost.
          </p>
        </Row>
        <Row>
          <button
            className="button"
            id="deleteAcc-cancel"
            type="button"
            onClick={() => props.isConfirmed(false)}
          >
            Cancel
          </button>
          {/* 
          TODO: Make DeleteDialog delete profile
          TODO: Add Hold action on confirmbutton with visual feedback
          */}
          <button
            className="button button-red"
            id="deleteAcc-confirm"
            type="button"
            onClick={() => props.isConfirmed(true)}
          >
            Yes, I am sure
          </button>
        </Row>
      </div>
    </Dialog>
  );
}
