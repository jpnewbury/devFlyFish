import { connectToDatabase } from "../../util/mongodb";
import Clinger from "../../components/svg/clinger";
import Crawler from "../../components/svg/crawlers";
import Swimmers from "../../components/svg/swimmers";
import Stoneflies from "../../components/svg/stones";
import Caddis from "../../components/svg/caddis";
import Hydropsyche from "../../components/svg/hydropsyche";
import Midge from "../../components/svg/midge";
import Featured from "../../components/svg/featured";
import Header from "../../components/header";
import BugbarNav from "../../components/bugbarNav";
import Image from "next/image";
import HeaderSlug from "../../components/headerSlug";
import Footer from "../../components/footer";
import Wetfly from "../../components/svg/hooks/h260bk";
import Czech from "../../components/svg/hooks/h333";
import Facted from "../../components/svg/hooks/faceted";
import Slotted from "../../components/svg/hooks/slotted";
import Round from "../../components/svg/hooks/round";
import Jig from "../../components/svg/hooks/jig";
import Anchor from "../../components/anchor";
import Cloud from "../../components/cloud";
import Cased from "../../components/svg/cased";
import Magnet from "../../components/svg/magnet";
import Nymph from "../../components/svg/hooks/nymph";
import Supreme from "../../components/svg/hooks/supreme";
import Short from "../../components/svg/hooks/short";
import Klinkhammer from "../../components/svg/hooks/klinkhammer";
export default function Movies({ movies: patterns }) {
  return (
    <div className="container">
      <Header title="Fly Box - Pattern Detail " background="rainbow" />
      <BugbarNav />
      <>
        {patterns.map((fly) => (
          <div key={fly._id} clas>
            <h2>
              {fly.featured === "true" && <Featured />}
              {fly.name}
            </h2>
            <p>{fly.description}</p>
            <div className="grid-ish">
              <div>
                <div>
                  <div className="col-5">
                    <div>
                      <div>
                        <div>
                          {fly.hookType === "wetfly" && <Wetfly />}
                          {fly.hookType === "czech" && <Czech />}
                          {fly.hookType === "jig" && <Jig />}
                          {fly.hookType === "supreme" && <Supreme />}
                          {fly.hookType === "short" && <Short />}
                          {fly.hookType === "nymph" && <Nymph />}
                          {fly.hookType === "klinkhammer" && <Klinkhammer />}
                        </div>
                        <div>
                          {fly.hookType === "jig" && (
                            <p className="citation">jig</p>
                          )}
                          {fly.hookType === "short" && (
                            <p className="citation">short</p>
                          )}
                          {fly.hookType === "supreme" && (
                            <p className="citation">wide gape</p>
                          )}
                          {fly.hookType === "klinkhammer" && (
                            <p className="citation">klinkhammer</p>
                          )}
                          {fly.hookType === "nymph" && (
                            <p className="citation">nymph</p>
                          )}
                          {fly.hookType === "czech" && (
                            <p className="citation">czech</p>
                          )}
                          {fly.hookType === "wetfly" && (
                            <p className="citation">wetfly</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
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
                  </div>
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
                        <b>Wing: </b> {fly.wing}
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
                </div>
              </div>
              <div>
                <Image src={fly.image} width="800px" height="800px" alt="" />
              </div>
            </div>
          </div>
        ))}
      </>
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const patterns = await db
    .collection("patterns")
    .find({ name: "Pink & Pine" })
    .sort({ name: 1 })
    .limit(2)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
