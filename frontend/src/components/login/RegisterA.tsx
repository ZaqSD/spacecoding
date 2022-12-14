import { Col, Container, Row } from "react-grid-system";

interface RegisterAProps {
  setView: (setShow: string) => void;
}
export default function RegisterA(props: RegisterAProps) {
  return (
    <div className="register-inputarea">
      <Row>
        <h1>Personal Information</h1>
      </Row>
      <Row>
        <select
          name="language"
          className="textfield profile-edit-input"
          id="language"
        >
          <option value="EN">ðºð¸ English</option>
          <option value="DE">ð©ðª Deutsch</option>
          <option value="IT">ð®ð¹ Italiano</option>
          <option value="ES">ðªð¸ EspaÃ±ol</option>
        </select>
      </Row>
      <Row>
        <input
          className="textfield profile-edit-input"
          id="profile-edit-username"
          placeholder="Username*"
        ></input>
      </Row>
      <Row>
        <input
          className="textfield profile-edit-input"
          placeholder="Full name*"
        ></input>
      </Row>
      <Row>
        <input
          className="textfield profile-edit-input"
          placeholder="E-Mail*"
        ></input>
      </Row>
      <Row>
        <input
          className="textfield profile-edit-input"
          placeholder="Phonenumber"
        ></input>
      </Row>
      <Row>
        <button
          className="button"
          id="register-back"
          onClick={() => props.setView("L")}
        >
          Back to Login
        </button>
        <button
          className="button button-primary"
          id="register-next"
          onClick={() => props.setView("B")}
        >
          Next
        </button>
      </Row>
    </div>
  );
}
