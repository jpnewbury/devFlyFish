import Image from "next/image";
import Layout from "../../components/layout";

import Suggested from "../../components/suggested";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
            <Header title="A Space for Fly Fishers" background="anthony" />
          </header>

          <h2>Hot Tags</h2>
          <section className="section1">
            <span className="first-letter">
              <p>
                When I started designing and fishing jig patterns, I noted a
                significant spike in my catch statistics with the new hot-tagged
                nymphs. I'm not sure if was the jig hook, the tungsten bead or
                the hot tags; It didnt matter, I was on the hook-up.
              </p>
            </span>
            <p>
              The first patterns I tied on jig hooks with hot tags were my
              original Dirty Hipsters. I continue to tie a couple of variations
              of this fly because it is so advantageous in early summer as water
              levels begin to drop. The Dirty Hipster has morphed into several
              pattern sets that I am currently stocking my boxes with, such as
              the Knuckle Dragger style of rubber-legged jigs. The designs are
              continually being refined to imitate more specific nymphal
              characteristics such as size, shape, color, and action of each of
              the
            </p>
            <span className="center multiply">
              <Image
                src="/OG-Dirty-Hipster.jpg"
                width={300}
                height={300}
                alt=""
              />
            </span>
            <p>
              The Dirty Hipster marks my jumping off point where I left the
              common euro-nymphing patterns and technique and into a more
              practical approach; imitative flies that combine a tungsten bead
              and thoughtful hook design to use in an intended water type. This
              methodology is still based on the European methods with the same
              gear but being more imitative with fly design.
            </p>
            <p>
              My approach to fly design has borrowed the chassis from the
              original European fly designs and then tie them to be more
              imitative matching the local nymph populations and incorporate UV
              treated materials into the design.
            </p>
            <span className="center multiply">
              <Image
                src="/gallery/SignalLightPerdigone.jpg"
                width={300}
                height={300}
                alt=""
              />
            </span>
            <p>
              Having fished jigs exclusively for over 8 years now, I can now
              make some meaningful comparisons between the use of UV materials,
              hot beads, and noticeable increases in fly effectiveness. My
              current conclusion, and subject to change at any moment, is that
              bead color is more important than hot tags. This bias is due to my
              preference for using hot beaded jigs in the water types and season
              that they are most effective, during spawning!
            </p>
            <p>
              I keep a few hot-tagged jig patterns in my box to be fished in
              water that may be too clear or shallow for the use of hot beads,
              but the added allure of a hot tag may be just the ticket. Lastly,
              I am incorporating UV — not to be confused with fluorescing —
              materials in all of my new fly pattterns.
            </p>
            <span className="center multiply">
              <Image
                src="/gallery/FlaminugUvBetty.jpg"
                width={300}
                height={300}
                alt=""
              />
            </span>
          </section>
          <h2>See Some Suggested Patterns</h2>
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
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
