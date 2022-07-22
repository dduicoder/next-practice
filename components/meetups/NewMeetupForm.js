import { useRef } from "react";

import classes from "./NewMeetupForm.module.css";

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  }

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
}

export default NewMeetupForm;
