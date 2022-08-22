import Head from "next/head";

import NotFound from "../components/layout/NotFound";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Meetups - Not found</title>
        <meta name="description" content="Could not find page." />
      </Head>
      <NotFound />
    </>
  );
};

export default ErrorPage;
