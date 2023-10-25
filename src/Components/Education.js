import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";

const Education = () => {
  return (
    <div>
      <Nav />
      <Body />
      <div className={"Edu"}>
        <h1>Education</h1>
        <ul>
          <li className={"title"}> Flight School - Aeroclube de Goiás </li>
          <li> Private Pilot </li>
          <li> Checked in 2018 </li>
        </ul>
        <ul>
          <li className={"title"}> Pontifical University Catholic of Goiás </li>
          <li> Bachelor of Sciences in Aeronautical Science </li>
          <li> Completed in 2020 </li>
        </ul>
        <ul>
          <li className={"title"}> Certificate - Meta - Coursera </li>
          <li>
            {" "}
            <a href="https://coursera.org/share/b327509d4f2be9fefad324ac09ff4fc8">
              {" "}
              Meta Front-End Developer Professional Certificate{" "}
            </a>{" "}
          </li>
          <li> Completed in 2023 </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
