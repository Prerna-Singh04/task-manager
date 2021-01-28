import React from "react";
import "../../scss/common.scss";

const Header = (props) => {
  const { redirectUrl, name } = props;

  const signout = () => {
    const isUserLogedIn = localStorage.getItem("logedInUserData");
    if (isUserLogedIn) {
      localStorage.removeItem("logedInUserData");
      window.location.href = window.location.protocol + "/";
    }
  };

  return (
    <div className="header">
      <a href={redirectUrl} className="accordian-link">
        {name}
      </a>
      <a onClick={signout} className="signout-btn">
        Signout
      </a>
    </div>
  );
};

export default Header;
