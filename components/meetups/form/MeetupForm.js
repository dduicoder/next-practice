import { useState } from "react";
import { useNotification } from "../../notification/NotificationProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import MeetupImageField from "./MeetupImageField";
import MeetupTagField from "./MeetupTagField";

import classes from "./MeetupForm.module.css";

const MeetupForm = ({ onWriteMeetup }) => {
  const dispatch = useNotification();

  const [images, setImages] = useState([""]);
  const [tags, setTags] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const { title, date, address, description } = Object.fromEntries(
      new FormData(event.target)
    );

    dispatch({
      type: "SUCCESS",
      message: "Meetup was successfully sent!",
      title: "Successful Request",
    });

    onWriteMeetup({
      title,
      tags,
      images,
      date,
      address,
      description,
    });
  };

  const date = new Date();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input required pattern=".*\S+.*" name="title" type="text" id="title" />
      <label className={classes.info}>
        Meetup Tags
        <div data="Not required. Press enter to add, click to remove">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </label>
      <MeetupTagField tags={tags} setTags={setTags} />
      <label htmlFor="image-input0">Meetup Images</label>
      <MeetupImageField images={images} setImages={setImages} />
      <label htmlFor="date" className={classes.info}>
        Meetup Date
        <div data="Minimum date: today">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </label>
      <input
        required
        min={date.toISOString().split("T")[0]}
        max={
          new Date(date.setFullYear(date.getFullYear() + 1))
            .toISOString()
            .split("T")[0]
        }
        name="date"
        type="date"
        id="date"
      />
      <label htmlFor="address">Meetup Address</label>
      <input
        required
        pattern=".*\S+.*"
        name="address"
        type="text"
        id="address"
      />
      <label htmlFor="description" className={classes.info}>
        Meetup Description
        <div data="Not required">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </label>
      <textarea name="description" id="description" rows="5"></textarea>
      <div className={classes.action}>
        <button className="btn-flat">Submit</button>
      </div>
    </form>
  );
};

export default MeetupForm;
