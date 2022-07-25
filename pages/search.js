import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import SearchList from "../components/search/SearchList";

const Search = ({ meetups }) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <SearchList meetups={meetups} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default Search;
