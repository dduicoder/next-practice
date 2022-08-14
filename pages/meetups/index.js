import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
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
        id: meetup._id.toString(),
        title: meetup.title,
        images: meetup.images,
        date: meetup.date,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
