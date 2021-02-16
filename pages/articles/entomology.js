import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Bugbar from "../../components/bugbar";
import Suggested from "../../components/suggested";
import Header from "../../components/header";
import Head from "next/head";

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

          <h2>A Fly Tyers Entomology</h2>
          <section className="section1">
            <span className="first-letter">
              <p>
                A food web exists beneath the rippled current of a trout stream
                far more diverse than anglers may realize. The functioning
                biological systems of a trout stream are often hidden from view
                unless we are willing to explore the wetted depths with a mask
                and snorkel or with kick seines.
              </p>
            </span>
            <p>
              Taxonomists have divided the known biological world up into eight
              categories from domain, kingdom, down to genus and species. For a
              fly angler wanting to know how to choose the right fly, it is
              essential to know at least the family orders of the three primary
              aquatic insects that make up the bulk of a trout's diet.
              Familiarity with these three insect families is a must when
              choosing the right fly.
            </p>

            <span className="bugbar__header">
              <h3>Mayflies, Caddisflies and Stoneflies</h3>

              <h3>The Mayflies - Ephemerellidae </h3>
            </span>

            <p>
              As the name suggests, <i>ephemerella</i>, mayfly’s are short-lived
              often less than two days. However, it is only the winged adult
              phase that mayflies only live this brief time. Nymphs of mayflies
              can live up to a year or longer during the sub-adult larval phase
              AKA nymph.
            </p>
            <span className="stack center multiply">
              <Image
                src="/drunella.png"
                width={400}
                height={400}
                alt="Drunella nymph"
              />
              <small>
                <i>Drunella grandis nymph</i>
              </small>
            </span>
            <p />
            <p>
              Mayflies have an incomplete life cycle with only a larval and
              adult stage and lacking a pupal stage. However, mayflies undergo
              two further stages of reproductive maturity with the first adult
              phase called the sub-imago or dun, the winged but not yet sexually
              mature and the imago stage or spinner, the final reproductive
              stage in the insects' life cycle. As mayflies emerge from the
              water, they will gather in and around the riparian canopy to
              undergo one more molt to become imagos or commonly called spinners
              and mate. Essentially, the dun stage is only used to transport the
              nymph from the bottom of the stream to the tree canopy to mate.
            </p>

            <p>
              Historically, fly fisherman favored fishing during a mayfly
              “hatch,” the transitory period between nymph and dun and imitate a
              dun (sub-imago) with a dry fly. When the nymphs transition into
              duns, a period of predatory vulnerability exists while the
              emerging insect floats on the water surface. Depending on
              environmental factors such as weather, water temps, cloud cover
              all play a role in how long insects may drift along before taking
              flight into the bankside foliage. These extended drifts make for
              rewarding dry fly fishing opportunities when you happen upon it.
            </p>
            <span className="stack center multiply">
              <Image
                src="/grandis.png"
                width={450}
                height={279}
                alt="Drunella Grandis"
              />
              <small>
                <i>Drunella grandis sub-imago</i>
              </small>
            </span>

            <p>
              Today’s anglers know that a dry fly hatch can be a short and
              unpredictable event with being at the right place and right time
              essential for dry fly fishing success. Fishing with nymphs offers
              anglers an unlimited opportunity to present a food item to a fish
              during the rest of the day. Famous rivers that were historically
              known for having regular daily hatches are seeing less reliable
              hatches and dry fly fishing taking a back seat to fishing nymphs
              or emergers. Many factors may be conspiring to the unreliability
              of daily hatches such as increasing angler hours/visits and
              climate change. Heavy angling pressure may be driving the fish
              from surface feeding and solely concentrating on nymphs and
              emerging duns sub-surface.
            </p>
            <h4>
              The following mayfly nymph types should be considered when
              selecting or tying our flies.
            </h4>
            <h2>Minnow Shaped Nymphs</h2>
            <div className="col-2b">
              <div className="stack center multiply">
                <div>
                  {" "}
                  <Image
                    src="/Baetis.png"
                    width={250}
                    height={300}
                    alt="Baetis"
                  />
                </div>
                <div>
                  <small>
                    <i>Baetis nymph</i>
                  </small>
                </div>
              </div>
              <div>
                <p>
                  Minnow shaped nymphs such as Baetis species are agile
                  swimmers. Baetis actively swim to the surface and back to the
                  bottom repeatedly for several days prior to emergence. When
                  tying patterns that imitate baetis nymphs, bear in mind the
                  shallow taper and slim body. Keep these nymphs thin and
                  streamlined.
                </p>
                <ul>Common Genus:</ul>
                <li>Ameletus</li>
                <li>Baetidae </li>
                <li>Leptophlebia </li>
                <li> Paraleptophlebia</li>
              </div>
            </div>
            <p />
            <h2>Spiney Crawlers</h2>
            <div className="col-2b">
              <div className=" center multiply">
                <Image
                  src="/drunella1.png"
                  width={250}
                  height={350}
                  alt="Green drake "
                />
              </div>
              <div>
                <p>
                  Members of the crawler group are very active and frequent
                  swimmers but prefer to remain amongst the cobble. Many begin
                  the emergence process underwater where a spot of color
                  enhances the fly and rapidly swim towards the surface.
                </p>
                <ul>Common Genus:</ul>
                <li>Ephemerella</li>
                <li>Drunella</li>
              </div>
            </div>
            <h2>Clinger - Crawlers</h2>
            <div className="col-2b">
              <div className="center multiply">
                <Image
                  src="/eporeus.png"
                  width={350}
                  height={350}
                  alt="clinger nymph"
                />
              </div>
              <div>
                <p>
                  Clinger nymphs, as the name suggests, cling firmly onto rock
                  and woody debris. It is now thought that the shape of clingers
                  is not only about remaining firmly attached to the substrate,
                  but rather, the thin profile allows them feed in the
                  interstitial spaces between rocks that other nymph shapes
                  cannot exploit. I suspect the large gills also aid in
                  breathing within those murky, silty spaces.
                </p>
              </div>
            </div>
          </section>
          <p />
          <section className="section1">
            <span className="bugbar__header">
              <h3>Stoneflies</h3>
              <Image
                src="/stones.png"
                width={400}
                height={200}
                alt="Stoneflies"
              />
              <p>
                Most stoneflies exhibit an elongated cylinder shape. When tying
                stoneflies consider the shape you are trying to mimic. When in
                doubt on how fat to tie your abdomens, its always better to
                error on the thin side allowing the nymph to swim nicely. Too
                fat or heavy a fly can complicate your presentations and cause
                an unnatural drift.
              </p>
            </span>
          </section>
          <p />
          <section className="section1">
            <span className="bugbar__header">
              <h3>The Caddisflies</h3>
            </span>

            <p>
              Of all the members of the EPT group, caddis are the only family to
              undergo a complete life cycle: larva, pupa, and adult. The pupal
              form is the transitional stage between either a sheltered dwelling
              of free-living caddis larva and the winged adult. Free-living
              caddis larva only build protective shelters of debris or stones
              that they seal themselves inside during pupation. Caddis pupa are
              only available at the time of emergence and in most cases,
              emerging pupa is the most vulnerable stage of the life cycle that
              available to trout.
            </p>
            <span className="center mutiply">
              <Image
                src="/caddisAdult.png"
                width={400}
                height={250}
                alt="Trichoptera"
              />
            </span>
            <p>
              It has long been debated the theory that caddis inflate their
              exoskeletons with a gas bubble to emerge to the surface. While I
              have not seen this phenomenon in person, I have seen tiny flashes
              of light near the surface of the water like that of the paparazzi
              shooting a movie star walking the red carpet. I have surmised that
              I was witnessing the glints of light as caddis emerge encased in
              this so-called gas bubble. Because of this phenomenon, I fish with
              caddis emerger patterns that imitate this gas bubble to some
              degree at or very near the surface instead or presented deeply.
              When fishing deeper in the water column, I use much less flashy,
              more opaque caddis pupa imitations because they have not yet begun
              to exhibit this gas bubble.
            </p>
            <p>
              I have observed several caddis species whose exoskeleton would
              exfoliate in the process of emergence. The chitin of the pupa
              would be somewhat transparent allowing the more colorful adults’
              abdomen to show through. Patterns such as my Lucent Sedge imitate
              this occurrence. Either way, I strive for a bright yet transparent
              effect when designing caddis pupa patterns.
            </p>
            <p>
              To give credit elsewhere, I once heard another fly fishing guru
              advise to use duller patterns deep and flasy patterns higher in
              the wayer column to match this natural phenomenon.
            </p>
            <p />
            <h2>Free Living Caddis</h2>
            <p />
            <span className="center multipl">
              <Image
                src="/Free-Living-Caddis-larva.png"
                width={400}
                height={300}
                alt="Rockworm"
              />
            </span>

            <p>
              Caddis larva are broken down into three distinct groups, the free
              living, net spinning and case/shelter building groups. Each of
              these groups have distinct behavioral characteristics important
              for the angler and fly tyer to understand. Free living caddis are
              predatory in nature, do not build shelters and crawl around the
              rocks in search of other macro invertebrates in which to feed
              upon. Net building caddis spin funnel shaped webs and feed on
              detritus filtered from the current captured in the nets that they
              construct. Shelter building caddis build protective shelters that
              they carry around with them as the crawl amongst the cobble
              feeding on the bio-film that grows on the rocks.{" "}
            </p>
            <p>
              It is interesting to note that free living caddis larva species
              emerge in small numbers throughout the season and are always
              available as opportunistic prey items throughout the day and long
              into the evening. Emergence activity of the free living groups
              will typically be in small but predictable numbers all season
              long. This makes them a top choice for the angler to imitate when
              no specific hatch activity can be observed. I generally prefer to
              start my angling day with a heavy Czech nymph probing the depths
              hoping to take advantage of opportunistic feeding activity and
              switch to a caddis emerger pattern when I actually detect
              emergence activity.
            </p>
            <ul>Common Genus:</ul>
            <li>Arctopsyche - Giant Net Spiner</li>
            <li>Hydropsyche - Net Spinner</li>
            <li>Rhyachophilia - Rockworm</li>
            <p />
            <h2>Cased Caddis</h2>
            <p />
            <Image
              src="/cased.png"
              width={400}
              height={200}
              alt="Vased Caddis"
            />

            <p>
              Some smaller shelter building caddis use a survival by numbers
              strategy for success. This means that they are typically found in
              very large quantities and emerge en-mass to avoid being heavily
              preyed upon in order to propagate the species. A very well known
              instance of this phenomenon is the Mother’s Day Caddis hatch of
              Brachycentrus. This hatch usually only lasts about 10 days or less
              just prior to runoff season. Clouds of caddis fill the air
              overwhelming predators both above and below the water through
              sheer confusion and overwhelming numbers.
            </p>
            <p>
              Anglers should practice the habit of turning over rocks and
              observing the general size shape and color of the caddis found.
              Kick net sampling is another effective method of gaining an
              understanding of the diversity of caddis groups that are present
              in your water.
            </p>
            <ul>Common genus:</ul>
            <li>Brachycentrus - woody debris</li>
            <li> Dicosmoecus - stone builder</li>
            <li>Glossosomatidae - stone builder</li>
            <li>Limnephilidae - stone & debris builder</li>
            <br />
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
