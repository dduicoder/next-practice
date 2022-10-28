import { MongoClient } from "mongodb";
import Head from "next/head";

import GroupList from "../../components/group/GroupList";

const GroupPage = ({ groups }) => {
  return (
    <>
      <Head>
        <title>Meetups - Group</title>
        <meta name="description" content="Join a meetup group!" />
      </Head>
      <GroupList groups={groups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/group?retryWrites=true&w=majority"
  );
  const db = client.db();

  const groupCollection = db.collection("group");

  const groups = await groupCollection.find().toArray();

  client.close();

  return {
    props: {
      groups: groups.map((group) => ({
        id: group._id.toString(),
        title: group.title,
        text: group.text,
        date: group.date,
      })),
    },
    revalidate: 1,
  };
};

export default GroupPage;
