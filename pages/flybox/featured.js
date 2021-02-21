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
import Image from "next/image";
import Footer from "../../components/footer";
import Wetfly from "../../components/svg/flytying/h260bk";
import Czech from "../../components/svg/flytying/h333";
import Facted from "../../components/svg/flytying/faceted";
import Slotted from "../../components/svg/flytying/slotted";
import Round from "../../components/svg/flytying/round";
import Jig from "../../components/svg/flytying/jig";
import Anchor from "../../components/anchor";
import Cloud from "../../components/cloud";

export default function Movies({ movies: patterns }) {
  return (
    <main>
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
            <h4> Best immitates:</h4>
            {fly.clinger === "true" && <Clinger />}
            {fly.crawler === "true" && <Crawler />}
            {fly.minnow === "true" && <Swimmers />}
            {fly.stonefly === "true" && <Stoneflies />}
            {fly.caddis === "true" && <Caddis />}
            {fly.freeliving === "true" && <Hydropsyche />}
            {fly.midgepupa === "true" && <Midge />}
            {fly.cloud === "true" && <Cloud />}
            {fly.anchor === "true" && <Anchor />}

            <div className="col-5">
              <div>
                <div className="stack">
                  <div>
                    {fly.hookType === "wetfly" && <Wetfly />}
                    {fly.hookType === "czech" && <Czech />}
                    {fly.hookType === "jig" && <Jig />}
                  </div>
                  <div>
                    {fly.hookType === "jig" && <p className="citation">Jig</p>}
                  </div>
                  <div>
                    {fly.hookType === "czech" && (
                      <p className="citation">Czech</p>
                    )}
                  </div>
                  <div>
                    {fly.hookType === "wetfly" && (
                      <p className="citation">Wetfly</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="stack">
                <div>
                  {fly.beadType === "faceted" && <Facted />}
                  {fly.beadType === "slotted" && <Slotted />}
                  {fly.beadType === "round" && <Round />}
                </div>
                <div>
                  {fly.beadType === "faceted" && (
                    <p className="citation"> faceted</p>
                  )}
                  {fly.beadType === "slotted" && (
                    <p className="citation">slotted</p>
                  )}
                  {fly.beadType === "round" && (
                    <p className="citation">round</p>
                  )}
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
