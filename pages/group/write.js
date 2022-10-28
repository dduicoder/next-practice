import { useRouter } from "next/router";
import Head from "next/head";

import GroupForm from "../../components/group/GroupForm";

const WriteGroupPage = () => {
  const router = useRouter();

  const writeGroup = (groupData) => {
    fetch("/api/write-group", {
      method: "POST",
      body: JSON.stringify(groupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/group");
  };
  return (
    <>
      <Head>
        <title>Meetups - Write group</title>
      </Head>
      <GroupForm onWriteGroup={writeGroup} />
    </>
  );
};

export default WriteGroupPage;
