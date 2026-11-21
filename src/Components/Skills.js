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
            <span className="skill-number">01</span>
            <h2>Front-end</h2>
            <ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React.js</li></ul>
          </div>
          <div className={"card"}>
            <span className="skill-number">02</span>
            <h2>Back-end</h2>
            <ul><li>Java</li><li>Kotlin</li><li>Python</li></ul>
          </div>
          <div className={"card"}>
            <span className="skill-number">03</span>
            <h2>Frameworks</h2>
            <ul><li>React</li><li>Spring Boot</li></ul>
          </div>
          <div className={"card"}>
            <span className="skill-number">04</span>
            <h2>Autimações</h2>
            <ul><li>n8n</li></ul>
          </div>
          <div className={"card"}>
            <span className="skill-number">05</span>
            <h2>Version control</h2>
            <ul><li>Git</li><li>GitHub</li></ul>
          </div>
          <div className={"card"}>
            <span className="skill-number">06</span>
            <h2>UX/UI design</h2>
            <ul><li>Figma</li><li>Canva</li></ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
