import React from "react";
import Bugbar from "../components/bugbar";

export default function header(props) {
  return (
    <>
      <div className="hero-box">
        <h1>John P. Newbury's Angling Arts</h1>
        <h2>{props.title}</h2>
      </div>
      <nav>
        <Bugbar />
        <strong className="center">
          You are viewing a development build, you may encounter 404's along
          your journey.
        </strong>
      </nav>
    </>
  );
}
