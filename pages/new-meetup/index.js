import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

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

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Meetups - Add meetup</title>
        <meta
          name="description"
          content="Add your own meetup and meetup with the world."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </Fragment>
  );
};

export default NewMeetupPage;
