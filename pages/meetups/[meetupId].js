import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import Meetup from "../../components/meetups/Meetup";
import NotFound from "../../components/layout/NotFound";

const MeetupPage = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{"Meetups - " + meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      {meetup.id === "notFound" ? <NotFound /> : <Meetup meetup={meetup} />}
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  if (meetupId.length !== 24) {
    return {
      props: {
        meetup: {
          id: "notFound",
          title: "Not found",
          images: null,
          date: null,
          address: null,
          description: "Could not find meetup.",
        },
      },
    };
  }

  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        tags: meetup.tags,
        images: meetup.images,
        date: meetup.date,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
};

export default MeetupPage;
