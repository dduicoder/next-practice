import Slider from "../UI/Slider";

import classes from "./Meetup.module.css";

const Meetup = ({ title, images, address, description }) => {
  return (
    <section className={classes.detail}>
      <Slider imgs={images} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default Meetup;
