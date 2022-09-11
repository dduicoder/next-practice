import { useRouter } from "next/router";
import Head from "next/head";

import MeetupForm from "../components/meetups/form/MeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetup = (meetupData) => {
    fetch("/api/new-meetup", {
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
        <title>Meetups - Add meetup</title>
        <meta name="description" content="Post your meetups." />
      </Head>
      <MeetupForm onAddMeetup={addMeetup} />
    </>
  );
};

export default NewMeetupPage;
