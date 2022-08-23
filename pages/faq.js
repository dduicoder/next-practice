import Head from "next/head";

import FAQ from "../components/layout/FAQ";

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>Meetups - FAQ</title>
        <meta name="description" content="Meetups FAQ page." />
      </Head>
      <FAQ />
    </>
  );
};

export default FAQPage;
