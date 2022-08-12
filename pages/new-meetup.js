import { useRouter } from "next/router";
import Head from "next/head";

import MeetupForm from "../components/meetups/MeetupForm";
import { useCallback } from "react";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetup = useCallback((meetupData) => {
    fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  });

  return (
    <>
      <Head>
        <title>Meetups - Add meetup</title>
        <meta
          name="description"
          content="Add your own meetup and meetup with the world."
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetup} />
    </>
  );
};

export default NewMeetupPage;
