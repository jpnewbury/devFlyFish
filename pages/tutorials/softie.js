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
              <b>Thorax:</b> Composite dubbing loopw with Speckled yellow Coq de
              leon hen saddle and light olive UV tracer squirrel flash dub #5.
            </li>
            <li>
              <b>collar:</b> Spectra dubbing #931 followed by natural fox UV
              tracer squirrel dub #48f.
            </li>
          </ul>
        </section>
        <section className="section">
          <p>
            A thinly dubbed tradiional style soft hackle pattern best suited for
            deep and extended presentations. Don't forget to let this fly swing
            all the way through the end of the drift. This mimics the emergance
            bahavior of many insects.
          </p>
        </section>

        <section className="grid-ish">
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
          <Tutorial image="/sbs/softie/1.jpg" step="Step 1" text="" />
          <Tutorial image="/sbs/softie/2.jpg" step="Step 2" text="" />
          <Tutorial image="/sbs/softie/3.jpg" step="Step 3" text="" />
          <Tutorial image="/sbs/softie/4.jpg" step="Step" text="" />
          <Tutorial image="/sbs/softie/5.jpg" step="Ste5" text="" />
          <Tutorial image="/sbs/softie/6.jpg" step="Ste6" text="" />
          <Tutorial image="/sbs/softie/7.jpg" step="Ste7" text="" />
          <Tutorial image="/sbs/softie/8.jpg" step="Ste8" text="" />
          <Tutorial image="/sbs/softie/9.jpg" step="Ste9" text="" />
          <Tutorial image="/sbs/softie/10.jpg" step="Ste10" text="" />
          <Tutorial image="/sbs/softie/11.jpg" step="Ste11" text="" />
          <Tutorial image="/sbs/softie/12.jpg" step="Ste12" text="" />
          <Tutorial image="/sbs/softie/13.jpg" step="Ste13" text="" />
          <Tutorial image="/sbs/softie/14.jpg" step="Ste14" text="" />
          <Tutorial image="/sbs/softie/15.jpg" step="Ste15" text="" />
          <Tutorial image="/sbs/softie/16.jpg" step="Ste16" text="" />
          <Tutorial image="/sbs/softie/17.jpg" step="Ste17" text="" />
          <Tutorial image="/sbs/softie/18.jpg" step="Ste18" text="" />
          <Tutorial image="/sbs/softie/19.jpg" step="Ste19" text="" />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
