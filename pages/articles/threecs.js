import Header from "../../components/header";
import Footer from "../../components/footer";
import BugbarNav from "../../components/bugbarNav";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Top() {
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
      </Head>
      <main className="container">
        <header className="header">
          <Header
            title="Reading: The Three C's for Reading the Water"
            background="default"
          />
        </header>
        <section className="section1">
          <div>
            <span className="first-letter">
              <p>
                Learning to recognize where and how fish exploit their habitat
                will improve your fishing skill set. Reading the water is not
                complicated if you take into consideration that fish need three
                things for primary survival: a respite from the <b>CURRENT</b>,{" "}
                <b>COVER</b> from above and an abundant food source -{" "}
                <b>CONVEYOR</b>. These three factors can give you a number of
                stream channel features at which to look. When you find a place
                with all three elements you have water worthy of fishing.
              </p>
            </span>
            <p>
              Respite from the current can come in a couple of forms -- physical
              obstructions and hydraulic dynamics. Trout prefer a current speed
              they can comfortably hold steady while expending the least amount
              of energy. Look for current speed from a stroll to a brisk walk
              and a depth of one to four feet. Fish will hold in much stronger
              or shallower currents if the bottom rubble is softball to bowling
              ball-sized. Low-pressure gradients are created on the downstream
              side of rocks -- much like an airfoil -- which allows the fish to
              hold with minimal effort.
            </p>
            <p>
              When looking for productive water, look for hydraulic features
              that funnel drifting material into bubble lanes. The best way to
              find these bubble lanes or current seams is to look for lines of
              bubbles drifting in single-file lines. Observe how the bubbles and
              foam always seem to take the same path as they get caught into
              micro-vortices. That is your indication that the currents are also
              gathering drifting food into a defined path akin to a{" "}
              <b>CONVEYOR</b> belt.
            </p>
            <p>
              Adding all three elements together is not hard to do. As you move
              from pool to pool, look for walking speed currents flowing over
              softball to bowling ball sized cobble that has observable bubble
              lanes. Then look for other clues as to where the fish might hold
              nearby while waiting to ambush drifting insects.
            </p>
            <p>
              There are a few basic visual clues one can learn to observe about
              streams in order to narrow the window of where fish are likely
              holding, especially on big rivers where fish could be anywhere.
              One of the most obvious and often overlooked indicators of likely
              fish locations are the bubble lines or bubble zones. Bubble lines
              occur where the current gathers together usually as a result of
              some instream structure funneling the surface bubbles into
              predictable locations which also funnels food into a small area
              making feeding easier for fish, thus expending fewer calories in
              an effort to feed. Instead of having to swim all over the place
              looking for food, a fish can hold in a preferred spot where the
              food is funneled directly to them. Current seams can also define
              the location of a bubble line or at least prove a location that
              can also funnel food into a narrow band. Though typically a bubble
              line is caused by underwater structure. Structure that gives fish
              a safe location in which to hold and feed. Usually, you will find
              current seams and bubble lines very near each other,{" "}
            </p>
            <p>
              In figure 1, You can see several prime structures you should look
              for when searching streams for likely trout holding water. There
              is an obvious current seam defining the slow and fast water,
              obvious underwater structure fish can use to hide near and a
              bubble line funneling food into the best possible holding spot.
              Can you identify where the fish should be in this picture?
            </p>
            <div className="center">
              <img
                src="/1459631621054-6BK5JNE19IEGLXZUA5W9.jpeg"
                width="90%"
                alt="Findi the bubble lane"
              />
            </div>
            <div className="citation">
              Figure 1. Typical Grade A trout structure. It has cover from
              above, A strong bubble line funneling food near structure with a
              quick escape route next heavy fast current.
            </div>

            <div className="center">
              <img
                src="/1459631966820-PU4ZEPPS6J5VVYFK95EW.jpeg"
                width="90%"
                alt="Find the bubble lane"
              />
            </div>
            <div className="citation">
              Figure 2. Current structure defined between current seams and foam
              lines or bubble zone.
            </div>
            <div className="center">
              <img
                src="/1459632450756-MKZQY9454POP59NA4R0I.jpeg"
                width="90%"
                alt="Find the bubble lane"
              />
            </div>
            <div className="citation">
              Figure 3. A fine specimen reveals its location.
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
