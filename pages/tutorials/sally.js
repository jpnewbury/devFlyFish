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
          <Header title="tutorials" background="rainbow2" />
        </header>
        <section>
          <div className="center">
            <Player link="https://youtu.be/9vtTtZgObyM" />
          </div>
        </section>
        <section>
          <div className="col-2a">
            <div className="center multiply">
              <Image
                src="/gallery/YSP-14-3.3C.jpg"
                width={300}
                height={300}
                alt="Yellow Sally Perdigone"
              />
            </div>
          </div>

          <div>
            <ul>
              <li>
                <b>Hook: </b>Jig or nymph, your choice
              </li>
              <li>
                <b>Bead:</b> Hanak metallic brown 3.0mm.
              </li>

              <li>
                <b>Thread: </b>Veevus 14/0 white. Important! this thread is the
                best on the market for UV reflective qualities. This is how I
                get that glowing transparent effect.{" "}
              </li>

              <li>
                <b>Tail: </b>Ginger Coq de Leon.
              </li>
              <li>
                <b>Abdomen: </b> Fl.orange with bi-color (tan and brown) body
              </li>

              <li>
                <b>Rib:</b> Fine orange wire.
              </li>
              <li>
                <b>Thorax:</b> Extra wraps of the ribbing.
              </li>
              <li>
                <b>Dorsal Mark:</b> Dark brown marker.
              </li>
              <li>
                <b>Resin:</b> Thin clear.
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
