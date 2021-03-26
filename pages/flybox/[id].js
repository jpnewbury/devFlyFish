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
import { useRouter } from "next/router";

export default function Movies({ movies: patterns }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className="container">
      {" "}
      <Header title="A Space for Fly Fishers" background="default" />{" "}
      <BugbarNav />
      {id}
      <div className="grid-ish">
        {patterns.map((fly) => (
          <div className="card" key={fly._id}>
            <h2>
              {fly.featured === "true" && <Featured />}
              {fly.name}
            </h2>
            <span className="multiply center">
              <Image src={fly.image} width="200px" height="200px" alt="" />
            </span>
            <p>{fly.description}</p>
            {fly.clinger === "true" && <Clinger style="icon" />}
            {fly.crawler === "true" && <Crawler style="icon" />}
            {fly.minnow === "true" && <Swimmers style="icon" />}
            {fly.stonefly === "true" && <Stoneflies style="icon" />}
            {fly.caddis === "true" && <Caddis style="icon" />}
            {fly.cased === "true" && <Cased style="icon" />}
            {fly.freeliving === "true" && <Hydropsyche style="icon" />}
            {fly.midgepupa === "true" && <Midge style="icon" />}
            {fly.cloud === "true" && <Cloud style="icon" />}
            {fly.anchor === "true" && <Anchor style="icon" />}
            {fly.attractor === "true" && <Magnet style="icon" />}
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
    .find({ id: "12345" })
    .sort({ metacritic: -1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
