import React from "react";
import Image from "next/image";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Tutorial from "../../components/tutorialCard";
import Head from "next/head";
import Supreme from "../../components/svg/hooks/supreme";
import Slotted from "../../components/svg/hooks/slotted";

function App() {
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
          content="A Femme Bot jig that agitates a varaiety of species."
        />
        <meta
          property="og:image"
          content="https://dev-fly-fish.vercel.app/_next/image?url=%2Fgallery%2FFemmeBotGen1.jpg&w=828&q=75"
        />
        <meta
          property="og:url"
          content="https://flyfish-pied.vercel.app/tutorials/shiela"
        />
      </Head>

      <main className="container">
        <header className="header">
          <Header
            title="Tutorials -  Tying a Femme Bot"
            background="rainbow2"
          />
        </header>
        <section>
          <div className="grid-ish">
            <div className="card">
              <h2>Tying a Femme Bot</h2>
              <Image
                src="/gallery/FemmeBotGen1.jpg"
                width={400}
                height={400}
                alt="Femme Bot Jig"
              />
            </div>
            <div className="card">
              <div className="col-2">
                <div>
                  <h3>Materials</h3>
                  <span className="center ">
                    <Supreme />
                    <Slotted />
                  </span>
                </div>
                <div></div>
              </div>

              <ul>
                <li>
                  <b>Hook:</b> Jig supreme.
                </li>
                <li>
                  <b>Bead :</b> Big pink tungsten.
                </li>
                <li>
                  <b>Thread:</b> 50D GSP.
                </li>
                <li>
                  <b>Tail:</b> Australian possum gaurd hairs. Tinsel along
                  sides.
                </li>
                <li>
                  <b>Abdomen:</b> Blend of australian possum and uv tracer
                  squirrel natural gray fox. Small uv pearl tinsel along the
                  sides. Secured with ribbing. Tag ends left to flank the tail.
                </li>
                <li>
                  <b>Rib:</b> Small oval gold tinsel securing the sides.
                </li>
                <li>
                  <b>Thorax:</b> Equal blend spectra #15 and UV tracer squirrel
                  natural red fox.
                </li>
                <li>
                  <b>Collar:</b> Black UV tracer squirrel.
                </li>
              </ul>

              <p> A multi-species agitator, this fly wakes em up fast!</p>
            </div>
          </div>
        </section>

        <section className="grid-ish">
          <Tutorial
            image="/sbs/shiela/1.jpg"
            step="Step 1"
            text="Mount a bead and build a thread jam behind the base."
          />
          <Tutorial
            image="/sbs/shiela/2.jpg"
            step="Step 2"
            text="Select a clump of gaurd hairs from a section of australian possum fur. Remove extra fluff leaving mostly the long soft gaurd hairs. Mount along the top of the hook shank and extending out the length of the body."
          />
          <Tutorial
            image="/sbs/shiela/3.jpg"
            step="Step 3"
            text="Attach the tinsel and clip out of the way."
          />
          <Tutorial
            image="/sbs/shiela/4.jpg"
            step="Step 4"
            text="Wax up a section of tying thread. This step is optional for the macho-man."
          />
          <Tutorial
            image="/sbs/shiela/5.jpg"
            step="Step 5"
            text="Begin to dub your way forward. To improve the tapered shape, start with a very thin amount of dubbing at the starting point."
          />
          <Tutorial
            image="/sbs/shiela/6.jpg"
            step="Step 6"
            text="As you progress forward in smooth tight wraps, maintain an even distribution of loosely spun dubbing. The idea is to capture the strands of fur with the thread tightly against the hook shank so we can brush the dubbing out later."
          />

          <Tutorial
            image="/sbs/shiela/8.jpg"
            step="Step 7"
            text="Mount the tinsel along the sides of the body and extending out alongside the tail."
          />
          <Tutorial
            image="/sbs/shiela/9.jpg"
            step="Step 8"
            text="Spiral the tinsel forward in seven evenly spaced wraps. Be careful to keep the tinsel sides aligned as you proceed."
          />
          <Tutorial
            image="/sbs/shiela/10.jpg"
            step="Step 9"
            text="Tidy up the thorax by trimming away tag ends and making sure you have a nice clean base to tie over. Trim the tinsel sides the length of the tail."
          />
          <Tutorial
            image="/sbs/shiela/12.jpg"
            step="Step 10"
            text="Wax up a section of thread and apply a loose mixture of tracer squirrel and spectra. Dab it onto the waxed thread."
          />
          <Tutorial
            image="/sbs/shiela/13.jpg"
            step="Step 11"
            text="Take two complete wraps, clean away any extra dubbing still on the thread and and tie off. I brushed the dubbing out in forward strokes with a wire brush. Shred away and strands of spectra that are too long."
          />
          <Tutorial
            image="/sbs/shiela/14.jpg"
            step="Step 12"
            text="Dub a small amount of the black tracer squirrel tightly onto the thread. Perform two complete turns, remove excess dubbing. Tie off and whip finish."
          />
          <Tutorial
            image="/sbs/shiela/15.jpg"
            step="Complete"
            text="The final result."
          />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
