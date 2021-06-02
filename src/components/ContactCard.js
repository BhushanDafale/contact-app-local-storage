import React from "react";
import user from "../images/user.jpeg";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact; // destructuring props
  return (
    <div className="ui segment item" style={{ padding: "7px 7px 7px 7px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact-detail/${id}`,
            state: { contact: props.contact },
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "-17px",
          float: "right",
          paddingTop: "25px",
          paddingRight: "20px",
        }}
        onClick={() => props.clickHandeler(id)}
      ></i>
      <i
        className="edit alternate outline icon"
        style={{
          color: "blue",
          marginTop: "-17px",
          float: "right",
          paddingTop: "25px",
          paddingRight: "30px",
        }}
        onClick={() => props.clickHandeler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
