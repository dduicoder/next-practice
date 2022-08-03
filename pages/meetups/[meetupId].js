import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import Meetup from "../../components/meetups/Meetup";
import NotFound from "../../components/layout/NotFound";

const MeetupDetail = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{"Meetups - " + meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      {meetup.id === "notFound" ? (
        <NotFound />
      ) : (
        <Meetup
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      )}
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
          image: null,
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
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetail;
