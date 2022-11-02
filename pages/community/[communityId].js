import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { useEffect } from "react";

import Community from "../../components/community/Community";
import NotFound from "../../components/layout/NotFound";

const CommunityPage = ({ community }) => {
  useEffect(() => {
    console.log("View community");
  });

  return (
    <>
      <Head>
        <title>{"Community - " + community.title}</title>
        <meta name="description" content="Meetup community" />
      </Head>
      {community.id === "notFound" ? (
        <NotFound />
      ) : (
        <Community community={community} />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/community?retryWrites=true&w=majority"
  );
  const db = client.db();

  const communityCollection = db.collection("community");

  const community = await communityCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: community.map((community) => ({
      params: { communityId: community._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const communityId = context.params.communityId;

  if (communityId.length !== 24) {
    return {
      props: {
        community: {
          id: "notFound",
          title: "Not found",
          text: null,
          date: null,
        },
      },
    };
  }

  const client = await MongoClient.connect(
    "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/community?retryWrites=true&w=majority"
  );
  const db = client.db();

  const communityCollection = db.collection("community");

  const community = await communityCollection.findOne({
    _id: ObjectId(communityId),
  });

  client.close();

  return {
    props: {
      community: {
        id: community._id.toString(),
        title: community.title,
        text: community.text,
        date: community.date,
        views: community.views,
        likes: community.likes,
        comments: community.comments,
      },
    },
  };
};

export default CommunityPage;
