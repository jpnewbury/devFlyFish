import React from "react";
import Player from "../../components/video";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BugbarNav from "../../components/bugbarNav";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
          <Header title="A Space for Fly Fishers" background="default" />
        </header>
        <section>
          <div className="center">
            <Player link="https://youtu.be/EC2VOHrSUSU" />
          </div>
        </section>
        <section>
          <div className="col-2a">
            <div className="center multiply">
              <Image
                src="/gallery/Drop-Dead-Sexy-Dark.jpg"
                width={300}
                height={300}
                alt="Drop Dead Sexy Walts"
              />
            </div>
          </div>

          <div>
            <ul>
              <li>
                <b>Hook: </b>Fullingmill Jig Force #10-16.
              </li>
              <li>
                <b>Bead:</b> Hanak metallic pink 3.0mm.
              </li>

              <li>
                <b>Thread: </b>Veevus 14/0 white. Important! this thread is the
                best on the market for UV reflective qualities. This is how I
                get that glowing transparent effect.{" "}
              </li>

              <li>
                <b>Tail: </b>dark pardo Coq de Leon.
              </li>
              <li>
                <b>Abdomen: </b> Medium hares mask fur.
              </li>

              <li>
                <b>Rib:</b> UV Pearl tinsel.
              </li>
              <li>
                <b>Thorax:</b> Dark hares mask fur and gray spectra blended.
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
