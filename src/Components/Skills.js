import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";

const Skills = () => {
  return (
    <>
      <div>
        <Nav />
        <Body />
        <div className={"main"}>
          <h1>Skills</h1>
        </div>
        <div className={"skill"}>
          <div className={"card"}>
            <h2> Front-End</h2>
            <h3>Html</h3>
            <h3>Css</h3>
            <h3>Javascript</h3>
            <h3>React.js</h3>
          </div>
          <div className={"card"}>
            <h2> Basic knowledge </h2>
            <h3>Python</h3>
          </div>
          <div className={"card"}>
            <h2> Version Control </h2>
            <h3>Git</h3>
            <h3>GitHub</h3>
          </div>
          <div className={"card"}>
            <h2>Ux/Ui Design</h2>
            <h3>Figma</h3>
            <h3>Canva</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
