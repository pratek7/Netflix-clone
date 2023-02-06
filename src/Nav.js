import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";

function Nav() {
  // /////////////////

  const [show, handelShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY < 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-container">
        <img
          onClick={() => history.push("/")}
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav-avatar"
          src="https://upload.wikimedia.org/fetchURLwikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
        <div className="nav-search-waper">
          <input className="nav-search" type="text" placeholder="search" />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="nav-nav-container">
          <h3>Filters</h3>
          <p>
            <Link to="/about">About</Link>
          </p>
        </div>
        {/* <img
          className="nav-logo"
         
          alt="Logo.png"
        />
        <img
          className="nav-avatar"
         
          alt="" */}
      </div>
    </div>
  );
}

export default Nav;
