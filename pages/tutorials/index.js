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
import Video from "../../components/svg/video";
import Header from "../../components/header";
import Footer from "../../components/footer";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Top({ movies: patterns }) {
  return (
    <>
      <Head>
        <title>John P. Newbury's Angling Arts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="Fly Fishing, Fly Tying, Newbury Fly Tying, Fullingmill"
        />
        <meta
          name="description"
          content="A place for fly fishers to to learn about some new fly patterns and fishing methods from a life-long fly fishing addict."
        />
        <meta name="revised" content="Angling Arts, 2/14/2021" />
      </Head>
      <main className="container">
        <header className="header">
          <Header title="Tutorials" background="rainbow2" />
        </header>
        <section className="section">
          <h2>Fly Tying Tutorials</h2>
          <div className="grid-ish">
            <Link href="/tutorials/czech">
              <div className="card">
                <h2>Tying Czech Nymphs</h2>
                {/* <Video /> */}
                <p>
                  Czech nymphs are a hidden gems covering more aquatic insects
                  than we realize.
                </p>
                <span className="center multiply">
                  <Image
                    src="/gallery/GreenPapaya.jpg"
                    width={300}
                    height={300}
                    alt="Yellow Sally Perdigone"
                  />
                </span>
              </div>
            </Link>
            <Link href="/tutorials/sally">
              <div className="card">
                <h2>Tying a Yellow Sally Perdigone</h2>
                <Video />
                <p>
                  Taking advantage of UV luminosity and transparent materials to
                  build a durable and effective pellet type nymph.
                </p>
                <span className="center multiply">
                  <Image
                    src="/gallery/YSP-14-3.3C.jpg"
                    width={300}
                    height={300}
                    alt="Yellow Sally Perdigone"
                  />
                </span>
              </div>
            </Link>
            <Link href="/tutorials/dropdead">
              <div className="card">
                <h2>Tying a Drop Dead Sexy Walts</h2>
                <Video />
                <p>I can't go fishing without them.</p>
                <span className="center multiply">
                  <Image
                    src="/gallery/Drop-Dead-Sexy-Dark.jpg"
                    width={300}
                    height={300}
                    alt="Drope Dea exy Walts"
                  />
                </span>
              </div>
            </Link>
          </div>
          <section>
            <h2>Photos From the Field</h2>
            <div className="grid-ish">
              <div className="block_card">
                <div className="center multiply">
                  <Image
                    src="/IMG_3574.JPG"
                    width={400}
                    height={400}
                    alt="Yampa River Rainbow on an OG Krush Deluxe"
                  />
                </div>
                <div className="center">
                  <small>A Yampa river bow takes an OG Krush Deluxe.</small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image src="/IMG_1964.jpg" width={340} height={400} alt="" />
                </div>
                <div className="center">
                  <small>An Umcompahagre Beast</small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image src="/CzechBox.jpg" width={400} height={400} alt="" />
                </div>
                <div className="center">
                  <small>Toolbox</small>
                </div>
              </div>

              <div className="block_card">
                <div className="center multiply">
                  <Image src="/0604_4951.jpg" width={300} height={400} alt="" />
                </div>
                <div className="center">
                  <small>Anthony on the Roaring Fork in Aspen.</small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image src="/cutty.jpg" width={400} height={400} alt="" />
                </div>
                <div className="center">
                  <small></small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image src="/IMG_4795.jpg" width={400} height={260} alt="" />
                </div>
                <div className="center">
                  <small>
                    The Roaring Fork River also has gold medal scenery.
                  </small>
                </div>
              </div>

              <div className="block_card">
                <div className="center multiply">
                  <Image
                    src="/CrystalFall2016BridgePool.jpg"
                    width={400}
                    height={320}
                    alt=""
                  />
                </div>
                <div className="center">
                  <small>Colorado Gold</small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image
                    src="/RainbowHeadHighRez.jpg"
                    width={400}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="center">
                  <small></small>
                </div>
              </div>
              <div className="block_card">
                <div className="center multiply">
                  <Image
                    src="/gallery/nbnb.jpg"
                    width={340}
                    height={400}
                    alt=""
                  />
                </div>
                <div className="center">
                  <small></small>
                </div>
              </div>
            </div>
          </section>
        </section>
        <p />

        <section>
          <h2>Flybox</h2>
          <div className="grid-ish">
            {patterns.map((fly) => (
              <div className="card" key={fly._id}>
                <h2>
                  {fly.featured === "true" && <Featured />} {fly.name}
                </h2>
                <span className="multiply center">
                  <Image src={fly.image} width="200px" height="200px" alt="" />
                </span>
                <p>{fly.description}</p>
                <ul>
                  {fly.hook && <li>Hook: {fly.hook}</li>}
                  {fly.bead && <li>Bead: {fly.bead}</li>}
                  {fly.thread && <li>Thread: {fly.thread}</li>}
                  {fly.tail && <li>Tail: {fly.tail}</li>}
                  {fly.tag && <li>Tag: {fly.tag}</li>}
                  {fly.rib && <li>Rib : {fly.rib}</li>}
                  {fly.body && <li>Body : {fly.body}</li>}
                  {fly.abdomen && <li>Abdomen : {fly.abdomen}</li>}
                  {fly.thorax && <li>Thorax : {fly.thorax}</li>}
                  {fly.shellback && <li>Shellback : {fly.shellback}</li>}
                  {fly.dorsalMarkings && (
                    <li>Markings : {fly.dorsalMarkings}</li>
                  )}
                  {fly.collar && <li>Collar : {fly.collar}</li>}
                  {fly.neck && <li>Neck : {fly.neck}</li>}
                  {fly.hackle && <li>Hackle : {fly.hackle}</li>}
                  {fly.wing && <li>wing : {fly.wing}</li>}
                  {fly.wingbuds && <li>Wingbuds : {fly.wingbuds}</li>}
                  {fly.legs && <li>Legs : {fly.legs}</li>}
                  {fly.head && <li>Head : {fly.head}</li>}
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
          <Link href="/flybox">
            <a>
              <button className="card__button"> See More Patterns</button>
            </a>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const flybox = await db
    .collection("patterns")
    .find({ splash: "true" })
    .sort({ name: 1 })
    .limit(3)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(flybox)),
    },
  };
}
