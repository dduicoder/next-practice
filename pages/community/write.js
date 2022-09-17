import { useRouter } from "next/router";
import Head from "next/head";

import CommunityForm from "../../components/community/CommunityForm";

const WriteCommunityPage = () => {
  const router = useRouter();

  const addCommunity = (communityData) => {
    fetch("/api/add-community", {
      method: "POST",
      body: JSON.stringify(communityData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/community");
  };

  return (
    <>
      <Head>
        <title>Meetups - Write community</title>
        <meta name="description" content="Meetup with the world!" />
      </Head>
      <CommunityForm onAddCommunity={addCommunity} />
    </>
  );
};

export default WriteCommunityPage;
