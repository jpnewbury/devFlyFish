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
import Footer from "../../components/footer";
import HeaderSlug from "../../components/headerSlug";
import Wetfly from "../../components/svg/hooks/h260bk";
import Czech from "../../components/svg/hooks/h333";
import Facted from "../../components/svg/hooks/faceted";
import Slotted from "../../components/svg/hooks/slotted";
import Round from "../../components/svg/hooks/round";
import Jig from "../../components/svg/hooks/jig";
import Anchor from "../../components/anchor";
import Cloud from "../../components/cloud";

export default function Movies({ movies: patterns }) {
  return (
    <main className="container">
      <Header title="Fly Box - Midges" background="rainbow" />
      <BugbarNav />
      <HeaderSlug
        title="Midges"
        image="/chironomidPupa.png"
        height="100px"
        width="150px"
        content="Midges are available as food for trout on a nearly daily basis and often out-weather many burly mans tolerance for extreme weather."
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
                  <b>Hook: </b> {fly.hook}
                </li>
              )}
              {fly.bead && (
                <li>
                  <b>Bead: </b> {fly.bead}
                </li>
              )}
              {fly.thread && (
                <li>
                  <b>Thread: </b> {fly.thread}
                </li>
              )}
              {fly.tail && (
                <li>
                  <b>Tail: </b> {fly.tail}
                </li>
              )}
              {fly.tag && (
                <li>
                  <b>Tag: </b> {fly.tag}
                </li>
              )}
              {fly.rib && (
                <li>
                  <b>Rib: </b> {fly.rib}
                </li>
              )}
              {fly.counter && (
                <li>
                  <b>Counter Rib: </b> {fly.counter}
                </li>
              )}
              {fly.body && (
                <li>
                  <b>Body: </b> {fly.body}
                </li>
              )}
              {fly.abdomen && (
                <li>
                  <b>Abdomen: </b> {fly.abdomen}
                </li>
              )}
              {fly.thorax && (
                <li>
                  <b>Thorax: </b> {fly.thorax}
                </li>
              )}
              {fly.shellback && (
                <li>
                  <b>Shellback: </b> {fly.shellback}
                </li>
              )}
              {fly.dorsalMarkings && (
                <li>
                  <b>Markings: </b> {fly.dorsalMarkings}
                </li>
              )}
              {fly.collar && (
                <li>
                  <b>Collar: </b> {fly.collar}
                </li>
              )}
              {fly.neck && (
                <li>
                  <b>Neck: </b> {fly.neck}
                </li>
              )}
              {fly.hackle && (
                <li>
                  <b>Hackle: </b> {fly.hackle}
                </li>
              )}
              {fly.wing && (
                <li>
                  <b>wing: </b> {fly.wing}
                </li>
              )}
              {fly.wingbuds && (
                <li>
                  <b>Wingbuds: </b> {fly.wingbuds}
                </li>
              )}
              {fly.legs && (
                <li>
                  <b>Legs: </b> {fly.legs}
                </li>
              )}
              {fly.head && (
                <li>
                  <b>Head: </b> {fly.head}
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
    .find({ midgepupa: "true" })
    .sort({ name: 1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
