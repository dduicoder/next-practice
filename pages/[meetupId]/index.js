import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import Meetup from "../../components/meetups/Meetup";

const MeetupDetail = ({ meetup }) => {
  return (
    <Fragment>
      <Head>
        <title>{"Meetups - " + meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <Meetup
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    </Fragment>
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
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(context.params.meetupId),
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
}

export default MeetupDetail;
