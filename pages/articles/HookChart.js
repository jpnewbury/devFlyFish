import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Bugbar from "../../components/bugbar";
import Suggested from "../../components/suggested";
import Header from "../../components/header";
import Head from "next/head";

import HookChart from "../../components/HookChart";

export default function Home() {
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
      <div className="container">
        <main className="content">
          <header className="header">
            <Header title="Fly Tying: Hook Chart" background="anthony" />
          </header>

          <section>
            <HookChart />
          </section>
          <h2>See the Suggested Patterns</h2>
          <section className="grid-ish">
            <Suggested
              title="Clinger / Crawler Nymphs"
              img="/OG-Dirty-Hipster.jpg"
              link="/flybox/clingers"
              description="A list of patterns that are useful for immitating the chunky profile that these nymph types exhibit."
            />
            <Suggested
              title="Best Swimmer Patterns"
              img="/gallery/Muskrat-Gray-Flashback-PT-10-3.2mm.jpg"
              link="/flybox/swimmers"
              description="Slender profiles yet heavy flies for getting deep, check out the patterns suggested to accomplish goal."
            />
            <Suggested
              title="Patterns for Caddis"
              img="/gallery/MothersdayJig.jpg"
              link="/flybox/caddis"
              description="You will find many intersting new patterns in the flybox that look and behave like a caddis should."
            />
            <Suggested
              title="Stoneflies"
              img="/gallery/KnuckleDraggerGolenStone.jpg"
              link="/flybox/stoneflies"
              description="Some big juicy patterns for big fat fish to chomp on!"
            />
            <Suggested
              title="Forage Items"
              img="/gallery/SBGR-10s-4MP.jpg"
              link="/flybox/streamers"
              description="Swimmy things that get a lot of attention."
            />
            <Suggested
              title="The In-between"
              img="/gallery/StacupChallenge.jpg"
              link="/flybox/emergers"
              description="Emerger and pupal patterns for emerging insects."
            />
          </section>
        </main>
      </div>
    </>
  );
}
