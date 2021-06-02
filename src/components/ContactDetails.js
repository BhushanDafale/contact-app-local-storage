import React from "react";
import userdetail from "../images/user-detail.png";
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main" style={{ marginTop: "70px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={userdetail} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="ui center floated button blue">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
