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
    <main className="container">
      <Header title="Fly Box" />
      <BugbarNav />
      <h2>Midges</h2>
      <div className="grid-ish">
        {patterns.map((fly) => (
          <div className="card" key={fly._id}>
            {fly.featured === "true" && <Featured />}
            <h2>{fly.name}</h2>
            <span className="multiply center">
              <Image src={fly.image} width="200px" height="200px" alt="" />
            </span>
            <p>{fly.description}</p>
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
    </main>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const patterns = await db
    .collection("patterns")
    .find({ midgepupa: "true" })
    .sort({ metacritic: -1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
