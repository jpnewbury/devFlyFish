import { connectToDatabase } from "../../util/mongodb";
import Clinger from "../../components/svg/clinger";
import Crawler from "../../components/svg/crawlers";
import Swimmers from "../../components/svg/swimmers";
import Stoneflies from "../../components/svg/stones";
import Caddis from "../../components/svg/caddis";
import Hydropsyche from "../../components/svg/hydropsyche";
import Rockworm from "../../components/svg/rockworm";
import Midge from "../../components/svg/midge";
import Featured from "../../components/svg/featured";
import Header from "../../components/header";
import BugbarNav from "../../components/bugbarNav";

import Image from "next/image";
import Link from "next/link";

export default function Movies({ movies: patterns }) {
  return (
    <div className="grid-ish">
      {patterns.map((fly) => (
        <div className="card" key={fly._id}>
          {fly.featured === "true" && <Featured />}
          <h2>{fly.name}</h2>
          <span className="multiply center">
            <Image src={fly.image} width="200px" height="200px" alt="" />
          </span>
          <p>{fly.description}</p>

          <ul>
            {fly.hook && (
              <li>
                <b>Hook:</b> {fly.hook}
              </li>
            )}
            {fly.bead && (
              <li>
                <b>Bead:</b> {fly.bead}
              </li>
            )}
            {fly.thread && (
              <li>
                <b>Threa</b>d: {fly.thread}
              </li>
            )}
            {fly.tail && (
              <li>
                <b>Tail:</b> {fly.tail}
              </li>
            )}
            {fly.rib && (
              <li>
                <b>Rib: </b>
                {fly.rib}
              </li>
            )}
            {fly.body && (
              <li>
                <b>Body:</b> {fly.body}
              </li>
            )}
            {fly.abdomen && (
              <li>
                <b>Abdom</b>en: {fly.abdomen}
              </li>
            )}
            {fly.thorax && (
              <li>
                <b>Thora</b>x: {fly.thorax}
              </li>
            )}
            {fly.collar && (
              <li>
                <b>Colla</b>r: {fly.collar}
              </li>
            )}
            {fly.neck && (
              <li>
                <b>Neck:</b> {fly.neck}
              </li>
            )}
            {fly.legs && (
              <li>
                <b>Legs:</b> {fly.legs}
              </li>
            )}
            {fly.hackle && (
              <li>
                <b>Hackl</b>e: {fly.hackle}
              </li>
            )}
            {fly.head && (
              <li>
                <b>Head:</b> {fly.head}
              </li>
            )}
          </ul>
          {fly.clinger === "true" && <Clinger />}
          {fly.crawler === "true" && <Crawler />}
          {fly.minnow === "true" && <Swimmers />}
          {fly.stonefly === "true" && <Stoneflies />}
          {fly.caddis === "true" && <Caddis />}
          {fly.hydropsyche === "true" && <Hydropsyche />}
          {fly.rockworm === "true" && <Rockworm />}
          {fly.midgePupa === "true" && <Midge />}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const patterns = await db
    .collection("patterns")
    .find({ featured: "true" })
    .sort({ name: 1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
