import React from "react";
import Head from "next/head";

export default function navbar() {
  return (
    <>
      <header className="header">
        <div className="hero-box">
          <h1>John P. Newbury's Angling Arts</h1>
          <h2>A space for fly fishers</h2>
        </div>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Fly Box</li>
        </ul>
      </nav>
    </>
  );
}
