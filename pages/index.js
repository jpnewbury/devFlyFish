import { connectToDatabase } from "../util/mongodb";
import BugbarNav from "../components/bugbarNav";
import Caddis from "../components/svg/caddis";
import Clinger from "../components/svg/clinger";
import Crawler from "../components/svg/crawlers";
import Featured from "../components/svg/featured";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import Hydropsyche from "../components/svg/hydropsyche";
import Link from "next/link";
import Image from "next/image";
import Midge from "../components/svg/midge";
import Rockworm from "../components/svg/rockworm";
import Stoneflies from "../components/svg/stones";
import Swimmers from "../components/svg/swimmers";
export default function Top({ movies: patterns }) {
  return (
    <>
      <Head>
        <title>John P. Newbury's Angling Arts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A place for fly fishers to to learn new fly patterns and fishing methods from a life-long fly fishing addict."
        />
        <meta name="revised" content="Angling Arts, 3/4/2021" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          property="og:title"
          content="John P. Newbury Angling Arts"
        />
        <meta name="twitter:card" content="John P. Newbury Angling Arts" />

        <meta
          property="og:description"
          content="A place for fly fishers to to learn new fly patterns and fishing methods from a life-long fly fishing addict.."
        />
        <meta
          property="og:image"
          content="https://dev-fly-fish.vercel.app/header.jpg"
        />
        <meta property="og:url" content="https://flyfish-pied.vercel.app/" />
      </Head>

      <main className="container">
        <header className="header">
          <Header title="for creative fly fishers" background="default" />
        </header>

        <section className="intro">
          <p>
            Welcome to the new Angling Arts website. This website focuses on fly
            fishing and tying tactical style nymphs. If you are a returning
            guest, you will notice a new feature to the website called the "Bug
            Bar" which sorts fly patterns based on the type of nymph the fly
            best immitates. I hope that this relationship with the natural and
            our imitations serve to inspire the curious angler into turning over
            some stones in your favorite stream and studying what's crawling
            underneath.
          </p>
          <p>
            in the next few weeks of early spring 2021, you will see the reading
            list and tutorials section expand as I push and pull new content
            around, send it to an editor and finally post it here. The fly
            pattern database will also be growing to include dry flies and
            streamers.
          </p>
          <p>
            On a personal note, I am deeply humbled when I see other fly tyers
            posting my patterns filling their fly boxes on the internet. I am
            even more humbled when they give proper credit to the patterns
            originator. -- whomever that may be -- <b>Thank you!</b>
            <br />
            <br /> <i>John P. Newbury</i>
          </p>
        </section>

        <div>
          <h2>Bug Bar</h2>
          <h3>A helpful guide to select the best fly</h3>
          <p>
            All fly patterns listed sitewide can be sorted by the type of nymph
            that they best imitate.
          </p>
          <BugbarNav />
        </div>

        <section>
          <div className="center">
            <div className="center multiply">
              <div className="block-quote">
                <Link href="http://fullingmill.com">
                  <a className="center" rel="nofollow">
                    <Image
                      src="/fmlogo.png"
                      width="200"
                      height="100"
                      alt="Fullingmill Logo"
                    />
                  </a>
                </Link>
                <p />
                <small>Signature Designer and Ambassador for Fullingmill</small>
              </div>
              <p />
            </div>
            <div className="center multiply">
              <div className="block-quote">
                <Link href="http://naturesspiritflytying.com">
                  <a rel="nofollow" className="center">
                    <Image
                      src="/nslogo.jpg"
                      width="180"
                      height="100"
                      alt="Fullingmill Logo"
                    />
                  </a>
                </Link>
                <p />
                <small>Fly Tying Ambassador for Natures Spirit Fly Tying</small>
              </div>
            </div>
          </div>

          <p />
        </section>
        <p />
        <div className="hero-box1"></div>
        <p />
        <h2>Current Reading:</h2>
        <section className="quote-box">
          <div className="col-2l">
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
                macroinvertebrates that are present in your trout waters with
                our pattern selection, it is also vital to match the
                conditions...
              </p>
            </div>
          </div>
        </section>
        <section className="section1">
          <h3>Adapting to Conditions</h3>
          <p>
            A few years back, I found myself faced with an unusual situation of
            not having the right weight of fly to meet my tactical angling
            needs. You see, I have been dredging the depths of rivers for so
            long looking for the largest fish a stream might hide, that I
            completely overlooked stocking my boxes with lightly weighted flies.
            My tactical focus became locked in on presenting heavily weighted
            nymphs in deep slots and thus ignored having a good plan for low
            water conditions when they came up.
          </p>
          <p>
            <div className="center border">
              <Image
                src="/flybox.jpg"
                width={400}
                height={300}
                alt="A box full of fly patterns with a fly rod and rain coat"
              />
            </div>
          </p>

          <p>
            The rivers in Western Colorado were flowing below average for the
            time of year. With rivers so low, the pools that I frequently fished
            became shallow, causing a significant change to the channel
            hydraulogy. This change in the hydrology moves fish out of the
            reliable pools and into other locations, generally, in pockets
            behind boulders or riffles. My attempt at drifting dense stonefly
            patterns into those locations was an exercise in futility. Fishing
            densely weighted patterns in shallow water may require more effort
            in maintaining a good drift, and in fact, it can be tricky.
          </p>

          <p>
            I am re-tooling many of my favorite spring fly patterns to be
            lighter to make low water tactical angling manageable. I am tying
            Perdigon nymphs with smaller than usual beads for gently sinking
            into shallow pockets behind boulders and soft hackled stoneflies for
            drifting just above the cobble in riffles. I even added a few
            smaller streamers that I can fish with my thirty-foot French
            leaders.
          </p>
          <p>
            While it is necessary to match the prevailing benthic
            macroinvertebrates that are present in your trout waters with our
            pattern selection, it is also vital to match the conditions. This
            year's low water will require an adjustment in tying lighter weight
            nymphs, so they will slowly reach the bottom without immediately
            banging into or getting snagged in the rocks. Brass beads are a
            lighter alternative to using tungsten beads can offer the solution
            for this requirement.
          </p>
          <div className="center border">
            <Image src="/Snapseed.jpg" width={400} height={300} alt="" />
          </div>
          <p>
            Besides bead selection, color is also an essential factor to
            consider. Somber hued, less flashy patterns are less likely to turn
            off the fish in low water conditions. Leave the bright hot spotted
            attractor patterns at home until it rains. Choose materials such as
            pheasant tail fibers, hares ear fur and partridge. These materials
            are buggy and dull lending to a natural looking fly. If using
            reflective materials such as tinsel, do so in a judicious manner. A
            little glint in a fly pattern can make them more attractive to fish,
            but just a dash too much can ruin it.
          </p>
          <p />
          <Link href="/articles">
            <a>
              <button className="card__button">More Articles</button>
            </a>
          </Link>
          <section />
        </section>
        <section>
          <h2>Hot List</h2>
          <h3>What's attached to my tippet</h3>
          <p>The three flies I am currently fishing.</p>

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
                {fly.clinger === "true" && <Clinger style="icon" />}
                {fly.crawler === "true" && <Crawler style="icon" />}
                {fly.minnow === "true" && <Swimmers style="icon" />}
                {fly.stonefly === "true" && <Stoneflies style="icon" />}
                {fly.caddis === "true" && <Caddis style="icon" />}
                {fly.hydropsyche === "true" && <Hydropsyche style="icon" />}
                {fly.rockworm === "true" && <Rockworm style="icon" />}
                {fly.midgepupa === "true" && <Midge style="icon" />}
                {fly.midgePupa === "true" && <Midge style="icon" />}
              </div>
            ))}
          </div>
          <Link href="/flybox">
            <a>
              <button className="card__button"> See More Patterns</button>
            </a>
          </Link>
        </section>
        <div className="section1" />
        <p />
        <section className="section1">
          <h2>Entomology for the Fly Fisher</h2>
          <span className="first-letter">
            <p>
              A food web exists beneath the rippled current of a trout stream
              far more diverse than anglers may realize. The functioning
              biological systems of a trout stream are often hidden from view
              unless we are willing to explore the wetted depths with a mask and
              snorkel or with kick seines.
            </p>
          </span>
          <p>
            Taxonomists have divided the known biological world up into eight
            categories from domain, kingdom, down to genus and species. For a
            fly angler wanting to know how to choose the right fly, it is
            essential to know at least the family orders of the three primary
            aquatic insects that make up the bulk of a trout's diet. Familiarity
            with these three insect families is a must when choosing the right
            fly.
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
            stage and lacking a pupal stage. However, mayflies undergo two
            further stages of reproductive maturity with the first adult phase
            called the sub-imago or dun, the winged but not yet sexually mature
            and the imago stage or spinner, the final reproductive stage in the
            insects' life cycle. As mayflies emerge from the water, they will
            gather in and around the riparian canopy to undergo one more molt to
            become imagos or commonly called spinners and mate. Essentially, the
            dun stage is only used to transport the nymph from the bottom of the
            stream to the tree canopy to mate.
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
            during the rest of the day. Famous rivers that were historically
            known for having regular daily hatches are seeing less reliable
            hatches and dry fly fishing taking a back seat to fishing nymphs or
            emergers. Many factors may be conspiring to the unreliability of
            daily hatches such as increasing angler hours/visits and climate
            change. Heavy angling pressure may be driving the fish from surface
            feeding and solely concentrating on nymphs and emerging duns
            sub-surface.
          </p>
          <Link href="/articles/entomology">
            <a>
              <button className="card__button">Continue Reading...</button>
            </a>
          </Link>

          <p />
          <p />
        </section>
        <section className="section1">
          <h2>About</h2>

          <div className="center  stack ">
            <div className="multiply">
              <Image
                src="/gallery/LastChanceGreenDrake.jpg"
                width={200}
                height={200}
                alt="Drop Dead Sexy Walts"
                quality="50"
              />
            </div>
          </div>
          <p>
            John Newbury began forging his career in fly tying and fishing at
            the age of 14 when he was hired to tie flies on a commercial basis
            for a small Colorado town sporting goods outfitter. That same
            summer, he started guiding wade trips along the small trout streams
            on the front range of the rockies. In his late teens, John left the
            trout world of Colorado for the rivers of the Pacific Northwest such
            as the Deschutes River where he focused on its prized steelhead and
            Native Redbands. The Deschutes River was home for many decades as
            John refined his tactical fly tying and nymphing skills. In the
            mid-1990s, he shifted his focus to learning the European nymphing
            strategies popular across the pond. Since relocating back to
            Colorado in 2014, he continues to modify his tactical nymphing
            approach and designing new fly patterns.
          </p>
          <p>
            Apart from making the endeavor of fly-fishing more enjoyable for his
            guests, he is currently completing a fly tying book and this
            companion website, drawing from his more than 43 years of experience
            in the field, uniquely combining his skills as a designer,
            photographer, fisheries-scientist, and writer.
          </p>
        </section>
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
