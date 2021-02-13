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
      <h2>Minnow Type Nymphs</h2>
      <section className="quote-box-small">
        <div className="col-2">
          <div>
            <svg viewBox="0 0 184.76 155" className="svg-quote-sm">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M184.76,13.64l-6.82-9.3c-32.86,20.46-75,60.14-75,102.3,0,18.6,11.16,37.82,26.66,48.36l46.5-36.58v-1.24C164.92,103.54,151.9,83.7,151.9,71.3,151.9,52.08,164.92,30.38,184.76,13.64Z" />
                  <path d="M0,102.3c0,18.6,11.78,37.82,27.28,49l46.5-37.2v-1.24C62.62,99.82,49.6,80,49.6,67c0-19.22,13-40.92,32.24-57.66L75,0C42.78,20.46,0,60.14,0,102.3Z" />
                </g>
              </g>
            </svg>
          </div>
          <div>
            <p>
              Minnow shaped nymphs such as Baetis species are agile swimmers.
              Baetis actively swim to the surface and back to the bottom
              repeatedly for several days prior to emergence. When tying
              patterns that imitate baetis nymphs, bear in mind the shallow
              taper and slim body. Keep these nymphs thin and streamlined.
            </p>
          </div>
          <div className="center multiply">
            <Image
              src="/Baetis.png"
              width={250}
              height={300}
              alt="baetis nymph"
            />
          </div>
        </div>
      </section>

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
    .find({ minnow: "true" })
    .sort({ metacritic: -1 })
    .limit(200)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(patterns)),
    },
  };
}
