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
import Fish from "../components/svg/fish";

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
          <h3>What happened to my store?</h3>
          <p>
            I had to stop selling flies because I could not keep pace with the
            growing demand for modern tactical nymphs. If you would like to
            purchase my patterns, please visit your local Fullingmill dealer.
          </p>
        </section>

        <div>
          <h2>Bug Bar</h2>
          <h3>A helpful guide to select the best fly</h3>
          <p>
            All fly patterns listed sitewide can be sorted by the type of nymph
            that they best imitate.
          </p>
        </div>
        <section>
          <BugbarNav />
        </section>

        <div className="hero-box1"></div>
        <p />
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
        <section className="hot">
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
                {fly.fish === "true" && <Fish style="icon" />}
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
