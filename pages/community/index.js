import { MongoClient } from "mongodb";
import Head from "next/head";

import CommunityList from "../../components/community/CommunityList";

const CommunityPage = ({ communitys }) => {
  return (
    <>
      <Head>
        <title>Meetups - Community</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <CommunityList communitys={communitys} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/community?retryWrites=true&w=majority"
  );
  const db = client.db();

  const communityCollection = db.collection("community");

  const communitys = await communityCollection.find().toArray();

  client.close();

  return {
    props: {
      communitys: communitys.map((community) => ({
        id: community._id.toString(),
        title: community.title,
        text: community.text,
        date: community.date,
      })),
    },
    revalidate: 1,
  };
};

export default CommunityPage;
