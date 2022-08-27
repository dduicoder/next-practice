import Head from "next/head";

import TOS from "../components/layout/TOS";

const TOSPage = () => {
  return (
    <>
      <Head>
        <title>Meetups - Terms of use</title>
        <meta name="description" content="Meetups terms of use page." />
      </Head>
      <TOS />
    </>
  );
};

export default TOSPage;
