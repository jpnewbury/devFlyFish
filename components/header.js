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
      </nav>

      {props.background === "default" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/header.jpg");
          }
        `}</style>
      ) : null}
      {props.background === "anthony" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/20190603-img_4298-1.JPG");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      ) : null}
      {props.background === "rainbow" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/IMG_2192.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
          }
        `}</style>
      ) : null}
      {props.background === "rainbow2" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/RainbowHeadHighRez.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
          }
        `}</style>
      ) : null}
      {props.background === "walts" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/Snapseed.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      ) : null}
      {props.background === "spools" ? (
        <style global jsx>{`
          .hero-box {
            background-image: url("/materials/HendsPatinaTinsel.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      ) : null}
    </>
  );
}
