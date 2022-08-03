import Head from "next/head";

import NotFound from "../components/layout/NotFound";

const Page = () => {
  return (
    <>
      <Head>
        <title>Meetups - Not found</title>
        <meta name="description" content="Could not find meetup." />
      </Head>
      <NotFound />
    </>
  );
};

export default Page;
