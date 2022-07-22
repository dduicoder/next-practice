import { Fragment } from "react";
import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
