import React from "react";
import Bugbar from "../components/bugbar";

export default function header(props) {
  return (
    <>
      <div className="hero-box">
        <h1>John Newbury's Angling Arts</h1>
        <h2>{props.title}</h2>
      </div>
      <nav>
        <Bugbar />
      </nav>
    </>
  );
}
