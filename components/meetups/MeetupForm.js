import { useState } from "react";
import classes from "./MeetupForm.module.css";

const MeetupForm = ({ onAddMeetup }) => {
  const [titleValid, setTitleValid] = useState(true);
  const [imageValid, setImageValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const { title, image, address, description } = Object.fromEntries(
      new FormData(event.target)
    );

    setTitleValid(title.trim().length !== 0);
    setImageValid(image.trim().length !== 0);
    setAddressValid(address.trim().length !== 0);
    setDescriptionValid(description.trim().length !== 0);

    if (
      title.trim().length === 0 ||
      image.trim().length === 0 ||
      address.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    onAddMeetup({
      title,
      image,
      address,
      description,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input
        onBlur={(e) => setTitleValid(e.target.value.trim().length !== 0)}
        className={titleValid ? "" : classes.invalid}
        name="title"
        type="text"
        id="title"
      />
      <label htmlFor="image">Meetup Image</label>
      <input
        onBlur={(e) => setImageValid(e.target.value.trim().length !== 0)}
        className={imageValid ? "" : classes.invalid}
        placeholder=""
        name="image"
        type="url"
        id="image"
      />
      <label htmlFor="address">Address</label>
      <input
        onBlur={(e) => setAddressValid(e.target.value.trim().length !== 0)}
        className={addressValid ? "" : classes.invalid}
        name="address"
        type="text"
        id="address"
      />
      <label htmlFor="description">Description</label>
      <textarea
        onBlur={(e) => setDescriptionValid(e.target.value.trim().length !== 0)}
        className={descriptionValid ? "" : classes.invalid}
        name="description"
        id="description"
        rows="5"
      ></textarea>
      <div className={classes.action}>
        <button className="btn">Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
