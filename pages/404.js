import Head from "next/head";
import { Fragment } from "react";
import NotFound from "../components/layout/NotFound";

const Page = () => {
  return (
    <Fragment>
      <Head>
        <title>Meetups - Not found</title>
        <meta name="description" content="Could not find meetup." />
      </Head>
      <NotFound />
    </Fragment>
  );
};

export default Page;
