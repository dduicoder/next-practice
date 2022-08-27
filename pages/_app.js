import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Loader from "../components/UI/Loader";

import "../styles/globals.css";

// next/image 쓰기

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  });

  return (
    <>
      <div id="overlays"></div>
      {loading && <Loader />}
      {router.pathname !== "/" ? (
        <>
          <Header />
          <main className="main">
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default App;
