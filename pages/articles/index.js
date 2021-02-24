import Link from "next/link";
import Image from "next/image";

import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function index(props) {
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
            <Header title="Reading" background="anthony" />
          </header>

          <section className="section">
            <div className="grid-ish">
              <Link href="/articles/tactical">
                <div className="card">
                  <h2>A Tactical Advantage</h2>
                  <h3>My Angle on Euro Nymphing</h3>
                  <span className="center multiply">
                    <Image
                      src="/CzechBox.jpg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </span>
                </div>
              </Link>
              <Link href="/articles/entomology">
                <div className="card">
                  <h2>A Fly Tyers Entomology</h2>
                  <h3>
                    A primer on the types of nymphs we need to know so we can
                    tie better flies.
                  </h3>
                  <span className="center multiply">
                    <Image
                      src="/drunella1.png"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </span>
                </div>
              </Link>
              <Link href="/articles/conditions">
                <div className="card">
                  <h2>Matching the Conditions</h2>
                  <h3>Plan ahead for tough fishing conditions.</h3>
                  <span className="center multiply">
                    <Image src="/TRCP01.jpg" width={400} height={400} alt="" />
                  </span>
                </div>
              </Link>

              <Link href="/articles/threecs">
                <div className="card">
                  <h2>Readsing the Water</h2>
                  <h3> Prime locations to hunt trout.</h3>
                  <span className="center multiply">
                    <Image
                      src="/1459631621054-6BK5JNE19IEGLXZUA5W9.jpeg"
                      width={400}
                      height={400}
                      alt=""
                    />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
