import { useRouter } from "next/router";
import Head from "next/head";

import CommunityForm from "../../components/community/CommunityForm";

const WriteCommunityPage = () => {
  const router = useRouter();

  const writeCommunity = (communityData) => {
    fetch("/api/write-community", {
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
      </Head>
      <CommunityForm onWriteCommunity={writeCommunity} />
    </>
  );
};

export default WriteCommunityPage;
