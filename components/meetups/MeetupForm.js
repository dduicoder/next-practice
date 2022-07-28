import { useRef } from "react";

import classes from "./MeetupForm.module.css";

const MeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    onAddMeetup({
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input type="text" required id="title" ref={titleInputRef} />
      <label htmlFor="image">Meetup Image</label>
      <input type="url" required id="image" ref={imageInputRef} />
      <label htmlFor="address">Address</label>
      <input type="text" required id="address" ref={addressInputRef} />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        required
        rows="5"
        ref={descriptionInputRef}
      ></textarea>
      <div className={classes.action}>
        <button className="btn">Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
