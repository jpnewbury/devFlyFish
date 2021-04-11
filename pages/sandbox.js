import Link from "next/link";
import Image from "next/image";

import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Leadfree from "../components/svg/leadFree";

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
          <h2>Reading List</h2>
          <section className="section">
            <Leadfree />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
