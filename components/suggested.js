import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function suggested(props) {
  return (
    <div className="grid-ish">
      <Link href={props.link}>
        <a>
          <div className="card">
            <h2>{props.title}</h2>
            <span className="center multiply">
              <Image src={props.img} width={400} height={400} alt="" />
            </span>
            <p>{props.description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
