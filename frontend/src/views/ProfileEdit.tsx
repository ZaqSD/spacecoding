import * as React from "react";

import { Col, Container, Row } from "react-grid-system";

import CountryDropdown from "../components/CountryDropdown";
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
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
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
                  props.profile.pers_name != null ? props.profile.pers_name : ""
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
