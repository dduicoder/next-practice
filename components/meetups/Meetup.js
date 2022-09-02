import { useState } from "react";

import MeetupModal from "./MeetupModal";

import Slider from "../UI/Slider";

import classes from "./Meetup.module.css";

const Meetup = ({ meetup }) => {
  const { title, images, date, address, description } = meetup;

  const [showModal, setShowModal] = useState(false);

  return (
    <section className={classes.meetup}>
      <MeetupModal
        show={showModal}
        close={() => setShowModal(false)}
        meetup={meetup}
      />
      <Slider imgs={images} />
      <h1>{title}</h1>
      <p>{date}</p>
      <address>{address}</address>
      <p>{description}</p>
      <div className={classes.control}>
        <button
          className="btn-flat"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Meetup!
        </button>
      </div>
    </section>
  );
};

export default Meetup;
