import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const history = useHistory();

  return (
    <div className="nav">
      <div className="nav-container">
        <img
          onClick={() => history.push("/")}
          className="nav-logo"
          src={"/netflixlogo.png"}
          alt="img"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav-avatar"
          src={"/netflix-avatar.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
