import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Bugbar from "../../components/bugbar";
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
            <Header
              title="Reading: Considering Varying Conditions"
              background="rainbow"
            />
          </header>
          <h2>Be Prepared for varirying conditions</h2>
          <section className="section1">
            <span className="first-letter">
              <p>
                While it is necessary to match the prevailing benthic
                macroinvertebrates that are present in your trout waters with
                ougoodr pattern selection, it is also vital to match the
                conditions as well. Seasonal low water will require an
                adjustment in tying lighter weight nymphs, so they will slowly
                reach the bottom without immediately banging into or getting
                snagged in the rocks. Brass beads are a lighter alternative to
                using tungsten beads can offer the solution for this
                requirement.
              </p>
            </span>
            <p>
              A few years back, I found myself faced with an unusual situation
              of not having the right weight of fly to meet my tactical angling
              needs. You see, I have been dredging the depths of rivers for so
              long looking for the largest fish a stream might hide, that I
              completely overlooked stocking my boxes with lightly weighted
              flies. My tactical focus became locked in on presenting heavily
              weighted nymphs in deep slots and thus ignored having a good plan
              for low water conditions when they came up.
            </p>
            <span className="center multiply">
              <Image src="/flybox.jpg" width={400} height={300} alt="" />
            </span>
            <p>
              The rivers in Western Colorado were flowing below average for that
              time of year. With rivers so low, the pools that I frequently
              fished became shallow, which caused a significant change to the
              hydraulics. This change in the hydrology moves fish out of the
              reliable pools and into other locations within the stream channel,
              generally, in pockets behind boulders or riffles. My attempt at
              drifting dense stonefly patterns into those locations was an
              exercise in futility. Fishing densely weighted patterns in shallow
              water may require more effort in maintaining a good drift, and in
              fact, it can be tricky.
            </p>
            <p>
              I am re-tooling many of my favorite spring fly patterns to be
              lighter to make low water tactical angling manageable. I am tying
              Perdigon nymphs with smaller than usual beads for gently sinking
              into shallow pockets behind boulders and soft hackled stoneflies
              for drifting just above the cobble in riffles. I even added a few
              smaller streamers that I can fish with my thirty-foot French
              leaders.
            </p>
            <span className="center multiply">
              <Image src="/hanakLeader.jpg" width={300} height={500} alt="" />
            </span>
            <p>
              While it is necessary to match the prevailing benthic
              macroinvertebrates that are present in your trout waters with our
              pattern selection, it is also vital to match the conditions as
              well. This year's low water will require an adjustment in tying
              lighter weight nymphs, so they will slowly reach the bottom
              without immediately banging into or getting snagged in the rocks.
              Brass beads are a lighter alternative to using tungsten beads can
              offer the solution for this requirement.
            </p>
            <p>
              Besides bead selection, color is also an essential factor to
              consider. Somber hued, less flashy patterns are less likely to
              turn off the fish in low water conditions. Leave the bright hot
              spotted attractor patterns at home until it rains. Choose
              materials such as pheasant tail fibers, hares ear fur and
              partridge. These materials are buggy and dull lending to a natural
              looking fly. If using reflective materials such as tinsel, do so
              in a judicious manner. A little glint in a fly pattern can make
              them more attractive to fish, but just a dash too much can ruin
              it.
            </p>
            <span className="center multiply">
              <Image src="/IMG_2192.jpg" width={400} height={160} alt="" />
            </span>
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
              img="/gallery/kdgs.jpg"
              link="/flybox/stoneflys"
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
        <Footer />
      </div>
    </>
  );
}
