import Head from "next/dist/shared/lib/head";

import HomePage from "../components/layout/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
