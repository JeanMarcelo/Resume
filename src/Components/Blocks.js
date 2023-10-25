import React from "react";
import { Link } from "react-router-dom";
import edu from "../img/edu.jpg";
import skill from "../img/skills.jpg";
import award from "../img/awards.jpg";

const Blocks = () => {
  return (
    <div className={"Container"}>
      <div>
        <Link to="/Education" className={"item"}>
          <img src={edu} alt="Education" width="170px" height="220px" />
          <h2>Education</h2>
        </Link>
      </div>
      <div>
        <Link to="/Skills" className={"item"}>
          <img src={skill} alt="Education" width="170px" height="220px" />
          <h2>Skills</h2>
        </Link>
      </div>
      <div>
        <Link to="/Award" className={"item"}>
          <img src={award} alt="Education" width="170px" height="220px" />
          <h2>Awards</h2>
        </Link>
      </div>
    </div>
  );
};

export default Blocks;
