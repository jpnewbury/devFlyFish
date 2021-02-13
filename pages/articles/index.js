import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import Bugbar from "../../components/bugbar";

export default function index() {
  return (
    <div className="container">
      <Layout>
        <main className="content">
          <Bugbar />
          <section className="section">
            <div className="grid-ish">
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
              <Link href="/articles/hottags">
                <div className="card">
                  <h2>Hot Tags</h2>
                  <h3>
                    My take on how to incorporate hot tags without going
                    overboard.
                  </h3>
                  <span className="center multiply">
                    <Image
                      src="/OG-Dirty-Hipster.jpg"
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
      </Layout>
    </div>
  );
}
