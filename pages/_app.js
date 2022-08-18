import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Loader from "../components/UI/Loader";

import "../styles/globals.css";

// prefetch
// page transition
// 인덱스 페이지?

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
      <Header />
      {loading && <Loader />}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default App;
