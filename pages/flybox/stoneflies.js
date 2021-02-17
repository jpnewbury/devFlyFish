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
import Footer from "../../components/footer";

import HeaderSlug from "../../components/headerSlug";
import Image from "next/image";
export default function Movies({ movies: patterns }) {
  return (
    <main className="container">
      <Header title="Fly Box - Stoneflies" background="rainbow" />
      <BugbarNav />
      <HeaderSlug
        title="Stonefly Nymphs"
        image="/stones.png"
        height="75px"
        width="150px"
        alt="clinger nymph"
        content="Most stoneflies exhibit an elongated cylinder shape. When tying
        stoneflies consider the shape you are trying to mimic. When in
        doubt on how fat to tie your abdomens, its always better to error
        on the thin side allowing the nymph to swim nicely. Too fat or
        heavy a fly can complicate your presentations and cause an
        unnatural drift."
      />

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
            {fly.midgepupa === "true" && <Midge />}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const patterns = await db
    .collection("patterns")
    .find({ stonefly: "true" })
    .sort({ name: 1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
