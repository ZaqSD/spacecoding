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
  setProfile: React.Dispatch<
    React.SetStateAction<{
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
    }>
  >;
  showEditView: boolean;
  setShowEditView: React.Dispatch<React.SetStateAction<boolean>>;
}

const updatedInformation: {
  username: string;
  pers_name: string;
  pers_email: string;
  pers_phonenumber: string;
  biz_position: string;
  biz_company: string;
  loc_city: string;
  loc_country: string;
  loc_timezone: string;
} = {
  username: "",
  pers_name: "",
  pers_email: "",
  pers_phonenumber: "",
  biz_position: "",
  biz_company: "",
  loc_city: "",
  loc_country: "",
  loc_timezone: "",
};

export default function ProfileEdit(props: ProfileEditProps) {
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = React.useState(false);

  async function handleSave() {
    const uploadSuccessful = await postData();
    uploadSuccessful ? props.setShowEditView(false) : setErrorOpen(true);
  }

  async function postData() {
    // TODO: Send POST request to backend with changes
    await updateDataUI();
    return true;
  }

  function updateDataUI(username?: string) {
    props.setProfile({
      id: props.profile.id,
      username:
        updatedInformation.username !== ""
          ? updatedInformation.username
          : props.profile.username,
      pers_name:
        updatedInformation.pers_name !== ""
          ? updatedInformation.pers_name
          : props.profile.pers_name,
      pers_email:
        updatedInformation.pers_email !== ""
          ? updatedInformation.pers_email
          : props.profile.pers_email,
      pers_phonenumber:
        updatedInformation.pers_phonenumber !== ""
          ? updatedInformation.pers_phonenumber
          : props.profile.pers_phonenumber,
      biz_position:
        updatedInformation.biz_position !== ""
          ? updatedInformation.biz_position
          : props.profile.biz_position,
      biz_company:
        updatedInformation.biz_company !== ""
          ? updatedInformation.biz_company
          : props.profile.biz_company,
      loc_city:
        updatedInformation.loc_city !== ""
          ? updatedInformation.loc_city
          : props.profile.loc_city,
      loc_country:
        updatedInformation.loc_country !== ""
          ? updatedInformation.loc_country
          : props.profile.loc_country,
      loc_timezone:
        updatedInformation.loc_timezone !== ""
          ? updatedInformation.loc_timezone
          : props.profile.loc_timezone,
      followCount: props.profile.followCount,
      followerCount: props.profile.followerCount,
    });
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
                  id="profile-edit-username"
                  placeholder={
                    props.profile.username != null ? props.profile.username : ""
                  }
                  onChange={(event) => {
                    updatedInformation.username = event.target.value;
                  }}
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder={
                    props.profile.pers_name != null
                      ? props.profile.pers_name
                      : ""
                  }
                  onChange={(event) => {
                    updatedInformation.pers_name = event.target.value;
                  }}
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder={
                    props.profile.pers_email != null
                      ? props.profile.pers_email
                      : ""
                  }
                  onChange={(event) => {
                    updatedInformation.pers_email = event.target.value;
                  }}
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder={
                    props.profile.pers_phonenumber != null
                      ? props.profile.pers_phonenumber
                      : ""
                  }
                  onChange={(event) => {
                    updatedInformation.pers_phonenumber = event.target.value;
                  }}
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
                  placeholder={
                    props.profile.biz_position != null
                      ? props.profile.biz_position
                      : ""
                  }
                  onChange={(event) => {
                    updatedInformation.biz_position = event.target.value;
                  }}
                ></input>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder={
                    props.profile.biz_company != null
                      ? props.profile.biz_company
                      : ""
                  }
                  onChange={(event) => {
                    updatedInformation.biz_company = event.target.value;
                  }}
                ></input>
              </Row>
              <Row>
                <h3>Location</h3>
              </Row>
              <Row>
                <input
                  className="textfield profile-edit-input"
                  placeholder={
                    props.profile.loc_city != null ? props.profile.loc_city : ""
                  }
                  onChange={(event) => {
                    updatedInformation.loc_city = event.target.value;
                  }}
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
