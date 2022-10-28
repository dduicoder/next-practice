import { useRouter } from "next/router";
import Head from "next/head";

import MeetupForm from "../../components/meetups/form/MeetupForm";

const WriteMeetupPage = () => {
  const router = useRouter();

  const writeMeetup = (meetupData) => {
    fetch("/api/write-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/meetups");
  };

  return (
    <>
      <Head>
        <title>Meetups - Write meetup</title>
        <meta name="description" content="Post your meetups." />
      </Head>
      <MeetupForm onWriteMeetup={writeMeetup} />
    </>
  );
};

export default WriteMeetupPage;
