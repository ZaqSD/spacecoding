import { Col, Container, Row } from "react-grid-system";

import CountryDropdown from "../CountryDropdown";
import TimezoneDropdown from "../TimezoneDropdown";

interface RegisterAProps {
  setView: (setShow: string) => void;
}
export default function RegisterB(props: RegisterAProps) {
  return (
    <div className="register-inputarea">
      <form action="/">
        <Row>
          <h1>Work Information</h1>
        </Row>
        <Row>
          <input
            className="textfield profile-edit-input"
            placeholder="Job position"
          ></input>
        </Row>
        <Row>
          <input
            className="textfield profile-edit-input"
            placeholder="Employer"
          ></input>
        </Row>
        <Row>
          <h1>Location</h1>
        </Row>
        <Row>
          <input
            className="textfield profile-edit-input"
            placeholder="City"
          ></input>
        </Row>
        <Row>
          <CountryDropdown />
        </Row>
        <Row>
          <TimezoneDropdown />
        </Row>
        <Row>
          <button
            className="button"
            id="register-back"
            onClick={() => props.setView("A")}
          >
            Back
          </button>
          <button
            className="button button-primary"
            id="register-next"
            type="submit"
            onClick={() => props.setView("B")}
          >
            Finish
          </button>
        </Row>
      </form>
    </div>
  );
}
