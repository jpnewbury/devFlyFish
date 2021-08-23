import "../styles/main.css";
import Loading from "../components/loading";
import { useState } from "react";
import Router from "next/router";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  // loading screen when route changes
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log(url);
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    console.log("Loading stop");
  });

  return (
    <>
      {loading && (
        <div className="modal">
          <Loading style="loader" />
        </div>
      )}
      <>
        <Component {...pageProps} key={router.route} />
      </>
    </>
  );
}

export default MyApp;
