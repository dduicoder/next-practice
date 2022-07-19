import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetup = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetupPage;
