import { connectToDatabase } from "../util/mongodb";
import Clinger from "../components/svg/clinger";
import Crawler from "../components/svg/crawlers";
import Swimmers from "../components/svg/swimmers";
import Stoneflies from "../components/svg/stones";
import Caddis from "../components/svg/caddis";
import Hydropsyche from "../components/svg/hydropsyche";
import Rockworm from "../components/svg/rockworm";
import Midge from "../components/svg/midge";
import Featured from "../components/svg/featured";
import Header from "../components/header";

import Image from "next/image";
import Link from "next/link";
export default function Top({ movies: patterns }) {
  return (
    <main className="container">
      <header className="header">
        <Header title="Featured fly Patterns" />
      </header>
      <section className="section1">
        <div>
          <strong>
            You are viewing a development build, you may encounter 404's along
            your journey.
          </strong>
          <h2>Intro</h2>
          <span className="first-letter">
            <p>
              Welcome to my new-ish, under construction web-page / app about
              modern nymph fishing. I've spent the better part of a viral
              outbreak, drought, record setting wildfires, hurricanes,
              scandalous elections and anything else that 2020-21 might yet
              throw at us updating my web development portfolio. This has given
              me the opportunity to tidy up my old website. In the process of
              performing updates, I discovered that my content needed a serious
              house cleaning. I found myself performing a few (dozen) copy
              edits, spelling corrections. I then consolidated all the
              information from my old website, and made it even more accessible
              to you by putting it all at your fingertips.
            </p>
          </span>
          <p>
            On a personal note, I am deeply humbled when I see other fly tyers
            posting my patterns filling their fly boxes on the internet. I am
            even more humbled when they give proper credit to the patterns
            originator. -- whomever that may be -- <b>Thank you!</b>
            <br />
            <br /> <i>John P. Newbury</i>
          </p>
        </div>
        <p />
      </section>
      <p />
      <section className="section1">
        <h2>About</h2>
        <p>
          John Newbury began forging his career in fly tying and fishing at the
          age of 14 when he was hired to tie flies on a commercial basis for a
          small Colorado town sporting goods outfitter. That same summer, he
          started guiding wade trips along the small trout streams on the Front
          Range of the Rockies. In his late teens, John left the trout world of
          Colorado or the rivers of the Pacific Northwest, most notably the
          Deschutes River where he focused on its prized steelhead and Native
          Redbands. The Deschutes River was home for many decades as John
          refined his tactical fly tying and nymphing skills. In the mid-1990s,
          he shifted his focus to learning the European nymphing strategies
          popular across the pond. Since relocating back to Colorado in 2014, he
          continues to modify his tactical nymphing approach and designing new
          fly patterns.
        </p>

        <p>
          Apart from making the endeavor of fly-fishing more enjoyable for his
          guests, he is currently completing a fly tying book and this companion
          website, drawing from his more than 43 years of experience in the
          field, uniquely combining his skills as a designer, photographer,
          scientist, and writer.
        </p>
        <div className="center multiply">
          <div className="block-quote">
            <Link href="http://fullingmill.com">
              <a className="center">
                <Image
                  src="/fmlogo.png"
                  width="200"
                  height="100"
                  alt="Fullingmill Logo"
                />
              </a>
            </Link>
            <p />
            John is a signature designer and ambassador for Fullingmill
          </div>
        </div>
        <div className="center multiply">
          <div className="block-quote">
            <Link href="http://naturesspiritflytying.com">
              <a className="center">
                <Image
                  src="/nslogo.jpg"
                  width="180"
                  height="100"
                  alt="Fullingmill Logo"
                />
              </a>
            </Link>
            <p />
            Fly tying ambassador for Natures Spirit
          </div>
        </div>
      </section>
      <p />
      <section className="quote-box">
        <div className="col-2">
          <div>
            <svg viewBox="0 0 184.76 155" className="svg-quote">
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
              While it is necessary to match the prevailing benthic
              macroinvertebrates that are present in your trout waters with our
              pattern selection, it is also vital to match the conditions...
            </p>
          </div>
        </div>
      </section>
      <section className="section1">
        <h2>Current Reading:</h2>
        <h3>Adapting to Conditions</h3>
        <p>
          A few years back, I found myself faced with an unusual situation of
          not having the right weight of fly to meet my tactical angling needs.
          You see, I have been dredging the depths of rivers for so long looking
          for the largest fish a stream might hide, that I completely overlooked
          stocking my boxes with lightly weighted flies. My tactical focus
          became locked in on presenting heavily weighted nymphs in deep slots
          and thus ignored having a good plan for low water conditions when they
          came up.
        </p>
        <p>
          <span className="center">
            <Image src="/flybox.jpg" width={400} height={300} alt="" />
          </span>
        </p>

        <p>
          The rivers in Western Colorado were flowing below average for the time
          of year. With rivers so low, the pools that I frequently fished became
          shallow, causing a significant change to the channel hydraulogy. This
          change in the hydrology moves fish out of the reliable pools and into
          other locations, generally, in pockets behind boulders or riffles. My
          attempt at drifting dense stonefly patterns into those locations was
          an exercise in futility. Fishing densely weighted patterns in shallow
          water may require more effort in maintaining a good drift, and in
          fact, it can be tricky.
        </p>

        <p>
          I am re-tooling many of my favorite spring fly patterns to be lighter
          to make low water tactical angling manageable. I am tying Perdigon
          nymphs with smaller than usual beads for gently sinking into shallow
          pockets behind boulders and soft hackled stoneflies for drifting just
          above the cobble in riffles. I even added a few smaller streamers that
          I can fish with my thirty-foot French leaders.
        </p>
        <p>
          While it is necessary to match the prevailing benthic
          macroinvertebrates that are present in your trout waters with our
          pattern selection, it is also vital to match the conditions. This
          year's low water will require an adjustment in tying lighter weight
          nymphs, so they will slowly reach the bottom without immediately
          banging into or getting snagged in the rocks. Brass beads are a
          lighter alternative to using tungsten beads can offer the solution for
          this requirement.
        </p>
        <p>
          Besides bead selection, color is also an essential factor to consider.
          Somber hued, less flashy patterns are less likely to turn off the fish
          in low water conditions. Leave the bright hot spotted attractor
          patterns at home until it rains. Choose materials such as pheasant
          tail fibers, hares ear fur and partridge. These materials are buggy
          and dull lending to a natural looking fly. If using reflective
          materials such as tinsel, do so in a judicious manner. A little glint
          in a fly pattern can make them more attractive to fish, but just a
          dash too much can ruin it.
        </p>
        <p />
        <p />
      </section>
      <section>
        <h3>Fly Box</h3>
        <h4>A Small Collection of Useful Fly Patterns</h4>
      </section>
      <section>
        <div className="grid-ish">
          {patterns.map((fly) => (
            <div className="card" key={fly._id}>
              {fly.featured === "true" && <Featured />}
              <h2>{fly.name}</h2>
              <span className="multiply center">
                <Image src={fly.image} width="200px" height="200px" alt="" />
              </span>
              <p>{fly.description}</p>
              <ul>
                {fly.hook && <li>Hook: {fly.hook}</li>}
                {fly.bead && <li>Bead: {fly.bead}</li>}
                {fly.thread && <li>Thread: {fly.thread}</li>}
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
      </section>
      <section className="section1">
        <h2>Entomology</h2>
        <span className="first-letter">
          <p>
            A food web exists beneath the rippled current of a trout stream far
            more diverse than anglers may realize. The functioning biological
            systems of a trout stream are often hidden from view unless we are
            willing to explore the wetted depths with a mask and snorkel or with
            kick seines.
          </p>
        </span>
        <p>
          Taxonomists have divided the known biological world up into eight
          categories from domain, kingdom, down to genus and species. For a fly
          angler wanting to know how to choose the right fly, it is essential to
          know at least the family orders of the three primary aquatic insects
          that make up the bulk of a trout's diet. Familiarity with these three
          insect families is a must when choosing the right fly.
        </p>
        <span className="bugbar__header">
          <h3>Mayflies, Caddisflies and Stoneflies</h3>

          <Image
            src="/grandis.png"
            width={300}
            height={200}
            alt="Drunella Grandis"
          />
          <h4>The Mayflies - Ephemerellidae </h4>
        </span>
        <p>
          As the name suggests, <i>ephemerella</i>, mayfly’s are short-lived
          often less than two days. However, it is only the winged adult phase
          that mayflies only live this brief time. Nymphs of mayflies can live
          up to a year or longer during the sub-adult larval phase AKA nymph.
        </p>
        <p>
          Mayflies have an incomplete life cycle with only a larval and adult
          stage and lacking a pupal stage. However, mayflies undergo two further
          stages of reproductive maturity with the first adult phase called the
          sub-imago or dun, the winged but not yet sexually mature and the imago
          stage or spinner, the final reproductive stage in the insects' life
          cycle. As mayflies emerge from the water, they will gather in and
          around the riparian canopy to undergo one more molt to become imagos
          or commonly called spinners and mate. Essentially, the dun stage is
          only used to transport the nymph from the bottom of the stream to the
          tree canopy to mate.
        </p>
        <p>
          Historically, fly fisherman favored fishing during a mayfly “hatch,”
          the transitory period between nymph and dun and imitate a dun
          (sub-imago) with a dry fly. When the nymphs transition into duns, a
          period of predatory vulnerability exists while the emerging insect
          floats on the water surface. Depending on environmental factors such
          as weather, water temps, cloud cover all play a role in how long
          insects may drift along before taking flight into the bankside
          foliage. These extended drifts make for rewarding dry fly fishing
          opportunities when you happen upon it.
        </p>
        <p>
          Today’s anglers know that a dry fly hatch can be a short and
          unpredictable event with being at the right place and right time
          essential for dry fly fishing success. Fishing with nymphs offers
          anglers an unlimited opportunity to present a food item to a fish
          during the rest of the day. Famous rivers that were historically known
          for having regular daily hatches are seeing less reliable hatches and
          dry fly fishing taking a back seat to fishing nymphs or emergers. Many
          factors may be conspiring to the unreliability of daily hatches such
          as increasing angler hours/visits and climate change. Heavy angling
          pressure may be driving the fish from surface feeding and solely
          concentrating on nymphs and emerging duns sub-surface.
        </p>
        <Link href="/articles/entomology">
          <a>
            <button className="card__button">Continue Reading...</button>
          </a>
        </Link>

        <p />
        <p />
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const flybox = await db
    .collection("patterns")
    .find({ featured: "true" })
    .sort({ name: 1 })
    .limit(3)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(flybox)),
    },
  };
}
