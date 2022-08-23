import Head from "next/dist/shared/lib/head";

import Index from "../components/layout/Index";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <Index />
    </>
  );
};

export default IndexPage;
