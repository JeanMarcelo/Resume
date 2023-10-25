import React from "react";
import Profile from "../img/Profile2.jpg";

const Body = () => {
  return (
    <>
      <div className={"Banner"}>
        <div>
          <h1>Front-End Developer</h1>
        </div>
        <div>
          <img src={Profile} alt="Profile" className={"imgBanner"} />
        </div>
        <div>
          <h2> Specialized in React </h2>
        </div>
      </div>
    </>
  );
};

export default Body;
