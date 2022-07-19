import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
