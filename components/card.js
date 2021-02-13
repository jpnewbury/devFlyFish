import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function card(props) {
  return (
    <Link href={props.link}>
      <div>
        <div className="card">
          <h2>{props.heading}</h2>
          <h3>{props.subheading}</h3>
          <h4>{props.description}</h4>
          <div className="center multiply">
            <img src={props.img} height={props.height} width={props.width} />
          </div>
        </div>
        <div className="bottom">
          <button class="card__button">See More</button>
        </div>
      </div>
    </Link>
  );
}
