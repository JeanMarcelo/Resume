import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";

const Award = () => {
  return (
    <div>
      <Nav />
      <Body />
      <div className={"Edu"}>
        <h1>Award</h1>
        <ul>
          <li className={"title"}> Certificate - Summa Cum Laude </li>
          <li> Graduation with honror - GPA 4 </li>
          <li> 2020 </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Award;
