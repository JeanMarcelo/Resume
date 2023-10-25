import React from "react";
import Avatar from "../img/Profile.jpg";
import Pictures from "./Pictures";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={"navbar"}>
      <div>
        <Link to="/">
          <img src={Avatar} alt="profile" width="45px" />
        </Link>
        <Link to="/">
          <h1> Jean Marcelo</h1>
        </Link>
      </div>
      <div>
        <Pictures />
      </div>
    </div>
  );
};

export default Nav;
