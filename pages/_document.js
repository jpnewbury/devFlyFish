import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A collection pf fly patterns and articles for the serious angler"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
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
            content="A collection pf fly patterns and articles for the serious angler"
          />
          <meta
            property="og:image"
            content="https://dev-fly-fish.vercel.app/header.jpg"
          />
          <meta property="og:url" content="https://flyfish-pied.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
