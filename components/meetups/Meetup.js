import Slider from "../UI/Slider";

import classes from "./Meetup.module.css";

const Meetup = ({ meetup }) => {
  const { title, images, date, address, description } = meetup;

  return (
    <section className={classes.detail}>
      <Slider imgs={images} />
      <h1>{title}</h1>
      <p>{date}</p>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default Meetup;
