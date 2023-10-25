import React from "react";
import In from "../img/link.png";
import Git from "../img/git.png";
import Ig from "../img/ig.png";

const Pictures = () => {
  return (
    <div className={"socialImg"}>
      <a href="https://www.linkedin.com/in/jean-marcelo-moreira-silva-aa1081204">
        <img src={In} alt="LinkedIn" width="36px" />
      </a>
      <a href="https://github.com/JeanMarcelo">
        <img src={Git} alt="GitHub" width="39px" />
      </a>
      <a href="https://www.instagram.com/jeanmarceloms/" width="45px">
        <img src={Ig} alt="instagram" width="35px" />
      </a>
    </div>
  );
};

export default Pictures;
