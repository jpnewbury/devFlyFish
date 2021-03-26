import Image from "next/image";
import Link from "next/link";

import Suggested from "../../components/suggested";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
``;
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
            <Header title="Reading: If Hooks Could Kill" background="anthony" />
          </header>

          <span className="title">
            <h3>If Hooks Could Kill</h3>
          </span>
          <section className="section1">
            <div>
              <p>
                Did you know it doesn’t take much effort to inflict a mortal
                wound to a fish because of a hook that is too large, potentially
                damaging vital arteries or even damaging the nervous system?
              </p>
              <p>
                The angling techniques I prefer strive to mitigate as many risks
                for harm to the fish as possible when we catch them. One measure
                I have adopted is to use tactical hook designs that are
                extremely sharp with rolled points that hold the fish under line
                tension, but fall free in the net when the fly is no longer
                under tension.
              </p>

              <p>
                Mindful of good hook design and increased potential for injury
                to the fish, I have been implementing a set of rules for my own
                best practices. A big rule is not fish a hook size any larger
                than a size 10 wide gap jig supreme to reduce the risk of a
                mortal injury. The Femme Bot pictured here is currently the
                largest fly in my box.
              </p>
              <Image
                src="/gallery/FemmeBotGen1.jpg"
                width={400}
                height={400}
                alt="Feme Bot"
                quality="20"
              />
              <p>
                To overcome the size limitation yet still fish with a large
                attractive fly means thinking about fly design. Having been
                schooled in the west coast spey casting scene fishing large
                heavy intruder style patterns taught me how to tie a large bulky
                fly with minimal mass. By using soft and stiff materials
                together, you can inflate the size of a fly without actually
                increasing the mass of the fly itself.
              </p>
              <p>
                The Femme Bot (Sheila Bugger) as an example, is one of the the
                first jig designs that I have implemented using this design
                pattern. By adding a long soft tail with guard hairs plucked
                from the hide equal in volume and length of the body, you can
                double the size of the fly, yet still allow us to fish a hook
                within a safer size range. Using a fur tail to accomplish this
                is nothing new, as the old traditional Gold Ribbed Hares Ear
                also calls for the same kind of tail. The dubbing method I use
                requires a bare minimum of material thoughtfully applied so that
                the stiff guard hair fibers radiate from the hook shank,
                creating a large visual size yet very little bulk.{" "}
              </p>
              <p>
                Using an analogue that we want the fly to be like a big fluffy
                Persian cat. Persian cats looks large and until you get them
                wet, thus revealing tiny little bodies. If we observed that same
                fluffy little cat swimming underwater, you would see the animals
                long billowing fur outstretched under neutral buoyancy regaining
                its optical size. Again, nothing new to see here as any streamer
                junkie will testify on that behalf. In fact, the whole history
                of the Femme Bot comes directly from the Possie Bugger pattern
                and the Possie Bugger is just another variation of a bugger and
                the bugger by design has a tail equal length and volume as the
                body.
              </p>
              <div className="center">
                <Link href="/tutorials/shiela">
                  <a>
                    <button className="card__button">View the Femme Bot</button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="center"></div>
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
