import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import CountryDropdown from "../components/CountryDropdown";
import DeleteAccountDialog from "../components/DeleteAccountDialog";
import MessageDialog from "../components/MessageDialog";
import TimezoneDropdown from "../components/TimezoneDropdown";

interface ProfileEditProps {
  profile: {
    id: number;
    username: string;
    pers_name: string;
    pers_email: string;
    pers_phonenumber: string;
    biz_position: string;
    biz_company: string;
    loc_city: string;
    loc_country: string;
    loc_timezone: string;
    followCount: number;
    followerCount: number;
  };
  showEditView: boolean;
  setShowEditView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProfileEdit(props: ProfileEditProps) {
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = React.useState(false);

  async function handleSave() {
    const uploadSuccessful = await postData();
    uploadSuccessful ? props.setShowEditView(false) : setErrorOpen(true);
  }

  function postData() {
    // TODO: Send POST request to backend with changes
    return false;
  }
  return (
    <>
      <Container>
        <DeleteAccountDialog
          open={deleteAccountOpen}
          handleDialog={setDeleteAccountOpen}
        />
        <MessageDialog
          title="Changes could not be saved"
          content="Something went wrong and your changes could not be saved. Please try again in a few moments."
          type="error"
          open={errorOpen}
          handleDialog={setErrorOpen}
        />
        <Row>
          <Col lg={4}>
            <div
              className="profile-information-column"
              id="profile-information-column-l"
            >
              <Row>
                <h3>Personal Information</h3>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="Username"
                  value={
                    props.profile.username != null ? props.profile.username : ""
                  }
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="Full name"
                  value={
                    props.profile.pers_name != null
                      ? props.profile.pers_name
                      : ""
                  }
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="E-Mail"
                  value={
                    props.profile.pers_email != null
                      ? props.profile.pers_email
                      : ""
                  }
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="Phonenumber"
                  value={
                    props.profile.pers_phonenumber != null
                      ? props.profile.pers_phonenumber
                      : ""
                  }
                ></input>
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="profile-information-column"
              id="profile-information-column-l"
            >
              <Row>
                <h3>Work Information</h3>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="Position"
                  value={
                    props.profile.biz_position != null
                      ? props.profile.biz_position
                      : ""
                  }
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="Company"
                  value={
                    props.profile.biz_company != null
                      ? props.profile.biz_company
                      : ""
                  }
                ></input>
              </Row>
              <Row>
                <h3>Location</h3>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder="City"
                  value={
                    props.profile.loc_city != null ? props.profile.loc_city : ""
                  }
                ></input>
              </Row>
              <Row>
                <CountryDropdown />
              </Row>
              <Row>
                <TimezoneDropdown />
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="profile-information-column"
              id="profile-information-column-l"
            >
              <Col lg={12}>
                <span>
                  <button
                    className="button button-primary"
                    id="profile-edit-save"
                    onClick={() => handleSave()}
                  >
                    Save Changes
                  </button>
                  <button
                    className="button"
                    id="profile-edit-cancel"
                    onClick={() => props.setShowEditView(false)}
                  >
                    Cancel
                  </button>
                </span>
              </Col>
              <Col lg={12}>
                <button
                  className="button button-red"
                  id="profile-edit-delete"
                  onClick={() => setDeleteAccountOpen(true)}
                >
                  Delete Profile
                </button>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
