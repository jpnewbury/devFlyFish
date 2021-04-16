import Link from "next/link";
import Image from "next/image";
import Hooks from "../../components/svg/hooks/FullingMillHigForce";
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
        <meta property="og:url" content="https://flyfish-pied.vercel.app" />

        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="John P. Newbury Angling Arts"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content="A place for fly fishers to to learn new fly patterns and fishing methods from a life-long fly fishing addict."
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://dev-fly-fish.vercel.app/header.jpg"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://flyfish-pied.vercel.app/"
        />
      </Head>

      <div className="container">
        <main className="content">
          <header className="header">
            <Header title="Reading" background="flybox" />
          </header>
          <h2>Reading List</h2>
          <section className="section">
            <div className="stack">
              <Link href="/articles/HookChart">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Hooks />
                    </div>
                    <div>
                      <h2>Tactical Hook Chart</h2>
                      <h3>
                        A collection of the best hooks and designs for tactical
                        fly tying.
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/articles/hooks">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Image
                        src="/IMG_1964.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>If Hooks Cold Kill</h2>
                      <h3>Consider your hook sizes for fishes sake.</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/articles/tactical">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Image
                        src="/CzechBox.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>A Tactical Advantage</h2>
                      <h3>My Angle on Euro Nymphing.</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/articles/entomology">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Image
                        src="/drunella1.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>A Fly Tyers Entomology</h2>
                      <h3>
                        A primer on the types of nymph shapes we need to know to
                        tie better flies.
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/articles/conditions">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Image
                        src="/TRCP01.jpg"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>Matching the Conditions</h2>
                      <h3>Plan ahead for tough fishing conditions.</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/articles/threecs">
                <div className="article_card">
                  <div className="col-2b">
                    <div>
                      <Image
                        src="/1459631621054-6BK5JNE19IEGLXZUA5W9.jpeg"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>Reading the Water</h2>
                      <h3> Prime locations to hunt trout.</h3>
                    </div>
                  </div>
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
