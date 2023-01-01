import React from "react";
import "./AccountDetails.css";
import SocialProfileSimple from "../Profile";

const AccountDetails = () => {
  const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
  return (
    <div className="account">
      {/* <img
        className="acc-img"
        src="https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
        alt="profile"
      /> */}
      {/* <p>{loggedIn.email}</p>
      <p>{loggedIn.mobile}</p> */}
      <SocialProfileSimple />
    </div>
  );
};

export default AccountDetails;
