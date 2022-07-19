import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "Game",
    image:
      "https://www.cgmagonline.com/wp-content/uploads/2021/05/news-discord-celebrated-6-years-yesterday.jpg",
    address: "Online",
    description: "Minecraft, Fortnite",
  },
  {
    id: "m2",
    title: "Fish",
    image:
      "https://www.takemefishing.org/getmedia/bde1c54e-3a5f-4aa3-af1f-f2b99cd6f38d/best-fishing-times-facebook.jpg?width=1200&height=630&ext=.jpg",
    address: "Somewhere",
    description: "Lets Fish!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
};

export default HomePage;
