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
import HeaderSlug from "../../components/headerSlug";

export default function Movies({ movies: patterns }) {
  return (
    <main className="container">
      <Header title="Fly Box" />
      <BugbarNav />
      <HeaderSlug
        title="Clinger Type Nymphs"
        image="/eporeus.png"
        alt="Clinger Type Nymphs"
        height="200px"
        width="150px"
        content="Clinger nymphs adhere firmly onto rock and woody debris with a
        suction-disc like shape. It is now beleived that the shape of
        clingers is not only about remaining firmly attached to the
        substrate, but rather, the thin profile allows them feed in the
        interstitial spaces between rocks that other nymph shapes cannot
        exploit. I suspect the large gills also aid in breathing within
        those murky, silty spaces."
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
    </main>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const patterns = await db
    .collection("patterns")
    .find({ clinger: "true" })
    .sort({ name: 1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
