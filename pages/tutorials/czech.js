import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Tutorial from "../../components/tutorialCard";
import Head from "next/head";
import Czech from "../../components/svg/hooks/h333";

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
          <h2>Tying a Czech Nymph</h2>
          <h3>Materials</h3>
          <div className="col-2">
            <div>
              <span className="center ">
                <Czech />
              </span>
            </div>
            <div></div>
          </div>
          <ul>
            <li>
              <b>Hook:</b> Fullingmill czech #8-16
            </li>
            <li>
              <b>Thread:</b> 50D GSP
            </li>
            <li>
              <b>Underbody:</b> 1mm strip zonker tape.
            </li>
            <li>
              <b>Abdomen: </b>Golden stone snowshoe rabbit foot dubbing.
            </li>
            <li>
              <b>Rib:</b> small oval gold french tinsel.
            </li>
            <li>
              <b>Thorax:</b> Pheasant tail brown snowshoe rabbit foot dubbing.
            </li>
            <li>
              <b>Shellback:</b> Amber stretchback cut to shape.
            </li>
            <li>
              <b>Dorsal Marks:</b> Dark brown waterproof marker.
            </li>
          </ul>
        </section>
        <section className="section1">
          <p>
            Czech nymphs migh be the best kept secret in our aresenal of
            patterns that can bring more fish to hand. The shape and posture
            created by tying cylindrical shapes on a curved hook allows us to
            imitate more aquatic insects than you may realize. To many anglers I
            meet, czech nympsh mean one thing, scuds! Ask another and they will
            say cadis larva. Ask me and I will have to add stoneflies,
            craneflies, aquatic beetle and water snipe into the arena.
          </p>
        </section>

        <section className="grid-ish">
          <div className="center multiply">
            <Image
              src="/gallery/CreamandOrangeCzech.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="center multiply">
            <Image
              src="/BlueGreenGrayCzechNymph12.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="center multiply">
            <Image
              src="/gallery/CinnimonToastCzech2018.jpg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <Link href="patterns/czech">
            <a>
              <button className="card__button">More Czech Nymphs</button>
            </a>
          </Link>
        </section>
        <section className="grid-ish">
          <Tutorial
            image="/sbs/czech/1.jpg"
            step="Step 1"
            text="Begin by trimming a 1mm wide section of zonker tape so we can begin to build a smooth and weighted underbody."
          />
          <Tutorial
            image="/sbs/czech/2.jpg"
            step="Step 2"
            text="Continue with another layer or two, depending on hook size and weight desired."
          />
          <Tutorial
            image="/sbs/czech/3.jpg"
            step="Step 3"
            text="Take a few passes of thread back and forth over the underbody. Tie in the ribbing at the rear, about 1/2 way around the bend. Note the tie off position."
          />
          <Tutorial
            image="/sbs/czech/3a.jpg"
            step="Step 4"
            text="Dab some tacky wax onto your thread. Don't be a macho man...Yes, you need it!"
          />
          <Tutorial
            image="/sbs/czech/4.jpg"
            step="Step 5"
            text="Start adding dubbing fur onto the waxed thread, build an even layer and start to twist it back and forth to comporess the fur."
          />
          <Tutorial
            image="/sbs/czech/5.jpg"
            step="Step 6"
            text="Compress the dubbing thin and tight to begin to wrapping the abdomen. Keep firm pressure in touching wraps as you advance the dubbing forward. What is important to bear in mind at this step is to eliminate the pillow cushion of space in the dubbing itself. A tightly dubbed abdomen will prevent our ribbings from dissapearing into the body."
          />
          <Tutorial
            image="/sbs/czech/6.jpg"
            step="Step 7"
            text="As you dub your way forward, add more dubbing onto the thread following the steps above. Wax on, dub on, spin, wrap tight. Here, I am adding a darker thorax color."
          />
          <Tutorial
            image="/sbs/czech/7.jpg"
            step="Step 8"
            text="Finish the dubbing sequence and inspect the shape. Grooming may be rquired to clean things up. Scruff the dubbing downward with a dubbing brush."
          />
          <Tutorial
            image="/sbs/czech/8.jpg"
            step="Step 9"
            text="Advance the ribbing forward in 9 evenly spaced wraps."
          />
          <Tutorial
            image="/sbs/czech/9.jpg"
            step="Step 10"
            text="Trim a section of streatchback and mount on the top of the hook shank at the eye and extending forward. Here, I illustrate the shape and orientation of the material mount."
          />
          <Tutorial
            image="/sbs/czech/10.jpg"
            step="Step 11"
            text="Stretch the shellback rearward with your material hand while performing evenly spaced counter-rib wraps towards the back. Adjusting tension of the nmaterial while wrapping each segment will help to enhance the segmented look we are aimaing to acheive."
          />
          <Tutorial
            image="/sbs/czech/11.jpg"
            step="Step 12"
            text="When you have reached the rear tie off position  -- illustrated in step 3 -- perform a few addition compression wraps to finish off the shellback. Trim away the tag leaving a short stub. Carefully Whip finish at the rear while trying to avoid building up any bulk or spreading the thread any further down the shank. This tying proceedure is excatly why I use GSP thread, it allows tying with muscle and finesee."
          />
          <Tutorial
            image="/sbs/czech/12.jpg"
            step="Step 13"
            text="Add dorsal markings with a waterproof ink pen."
          />
          <Tutorial
            image="/sbs/czech/13.jpg"
            step="Step 14"
            text="A thin coat of UV resin on the markings to seal. Look 👀 at that glow!!!"
          />
          <Tutorial image="/sbs/czech/14.jpg" step="Step 15" text="Done!" />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
