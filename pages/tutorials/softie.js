import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Tutorial from "../../components/tutorialCard";
import Head from "next/head";
import Jig from "../../components/svg/hooks/jig";
import Slotted from "../../components/svg/hooks/slotted";

function App() {
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
          <Header
            title="Tutorials -  Tying a Czech Nymph"
            background="rainbow2"
          />
        </header>
        <section>
          <h2>Tying a big Softie</h2>
          <h3>Materials</h3>
          <div className="col-2">
            <div>
              <span className="center ">
                <Jig />
                <Slotted />
              </span>
            </div>
            <div></div>
          </div>
          <ul>
            <li>
              <b>Hook:</b> Jig Supreme
            </li>
            <li>
              <b>Bead :</b> Metallic brown slotted tungsten.
            </li>
            <li>
              <b>Thread:</b> 50D GSP
            </li>
            <li>
              <b>Tail:</b> Dark pardo CDL.
            </li>
            <li>
              <b>Abdomen:</b> Caddis green snowshoe rabbit foot dubbing #20.
            </li>
            <li>
              <b>Rib:</b> Hends patina tinsel, matte black #pat-30.
            </li>
            <li>
              <b>Thorax:</b> Composite dubbing loopw with speckled yellow Coq de
              leon (CDL) hen saddle and light olive UV tracer squirrel flash dub
              #5.
            </li>
            <li>
              <b>Collar:</b> Spectra dubbing #931 followed by natural fox UV
              tracer squirrel dub #48f.
            </li>
          </ul>
        </section>
        <section className="section">
          <p>
            A thinly dubbed tradional style soft hackle pattern that excells at
            deep and extended presentations. Don't forget to let this fly swing
            all the way through the end of the drift, mimicing the emergance
            bahavior of many insects.
          </p>
        </section>

        <section className="grid-ish center">
          <div className="center multiply">
            <Image
              src="/gallery/TwoSofties.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="center multiply">
            <Image
              src="/gallery/SS-WB-14-3.5RG.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="center multiply">
            <Image
              src="/gallery/SH-HE-14S-3.5GF.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>

          <Link href="/flybox/softies">
            <a>
              <button className="card__button">More Softies</button>
            </a>
          </Link>
        </section>
        <section className="grid-ish">
          <Tutorial
            image="/sbs/softie/1.jpg"
            step="Step 1"
            text="Establish the thread onto the hook shank and build a small jam behind the bead to secure it place."
          />
          <Tutorial
            image="/sbs/softie/2.jpg"
            step="Step 2"
            text="Attach several strands of CDL tailing fibers to the top of the hook shank, and tie down to the bend of the hook. Attach the ribbing at the same time."
          />
          <Tutorial
            image="/sbs/softie/3.jpg"
            step="Step 3"
            text="Apply tacky wax to the thread, you cannot properly execute this step without it."
          />
          <Tutorial
            image="/sbs/softie/4.jpg"
            step="Step 4"
            text="Dab small amounts of the dubbing blend onto the waxed thread so that strands begin to adhere to the wax. "
          />
          <Tutorial
            image="/sbs/softie/5.jpg"
            step="Step 5"
            text="Take a few turns of the dubbed thread to lock in the dubbing at the rear."
          />
          <Tutorial
            image="/sbs/softie/6.jpg"
            step="Step 6"
            text="Wind the thread forward in evely placed, touching, firm thread wraps. Bind the dubbing down against the hook shank. Notice how the dubbing remains loosely applied to the thread throughout this proceedure."
          />
          <Tutorial
            image="/sbs/softie/7.jpg"
            step="Step 7"
            text="Peel away any remaining dubing that did not get tied down. Spiral the ribbing forward in seven to nine evenly spaced turns."
          />
          <Tutorial
            image="/sbs/softie/8.jpg"
            step="Step 8"
            text="Form a dubbing loop and wax it up."
          />
          <Tutorial
            image="/sbs/softie/9.jpg"
            step="Step 9"
            text=" Prepare a section of hen saddle feather and sandwhich a small amount of tracer squirrel flash dubing into the dubbing loop with it."
          />
          <Tutorial
            image="/sbs/softie/10.jpg"
            step="Step 10"
            text="Carefully trim away the father stem as close to the thread loop as possible."
          />
          <Tutorial
            image="/sbs/softie/11.jpg"
            step="Step 11"
            text="Spin the dubbing loop into a brush. Use a dubbing brush tool to liberate any trapped fibers."
          />
          <Tutorial
            image="/sbs/softie/12.jpg"
            step="Step 12"
            text="Wind 1-2 turns only. Tie off with cross-over binding wraps."
          />
          <Tutorial
            image="/sbs/softie/13.jpg"
            step="Step 13"
            text="Pull a small amount of spectra fibers from a clump and enshroud the front of the fly."
          />
          <Tutorial
            image="/sbs/softie/14.jpg"
            step="Step 14"
            text="Perform a full loose wrap of thread to capture the fibers and then bind it into the space between the hackle and bead with a few more tight, cinching wraps. "
          />
          <Tutorial
            image="/sbs/softie/15.jpg"
            step="Ste15"
            text="pull the strands of spectra forward and shred away the extra, leaving a soft frayed collar."
          />
          <Tutorial
            image="/sbs/softie/16.jpg"
            step="Step 16"
            text=" Keep pruning away untill you have..."
          />
          <Tutorial
            image="/sbs/softie/17.jpg"
            step="Step 17"
            text=" a color that looks lke this."
          />
          <Tutorial
            image="/sbs/softie/18.jpg"
            step="Step 18"
            text="You guessed it, let's wax some more thread and dab onto it a small pinch of UV squirrel tracer dub. Take 2 stacking wraps. Stacking wraps are placed sequentially one on top of the other under heavy tension."
          />
          <Tutorial
            image="/sbs/softie/19.jpg"
            step="Ste19"
            text="Groom away enough material as required to keep things thin and sparse. Here I created the illusion of bulk without actually creating it; allowing for a quickly sinking fly with a natural animation."
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
