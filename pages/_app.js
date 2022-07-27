import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Loader from "../components/UI/Loader";
import "../styles/globals.css";

// 404 페이지

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });

  return (
    <Fragment>
      <Header />
      {loading && <Loader />}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyApp;
