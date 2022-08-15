import { useState } from "react";

import classes from "./MeetupForm.module.css";

const MeetupForm = ({ onAddMeetup }) => {
  const [imageFields, setImageFields] = useState([""]);

  const changeField = (text, i) => {
    setImageFields((prevData) => {
      let data = [...prevData];
      data[i] = text;
      return data;
    });
  };

  const addField = () => {
    setImageFields((prevData) => {
      return [...prevData, ""];
    });
  };

  const removeField = (i) => {
    setImageFields((prevData) => {
      let data = [...prevData];
      data.splice(i, 1);
      return data;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const { title, date, address, description } = Object.fromEntries(
      new FormData(event.target)
    );

    onAddMeetup({
      title,
      images: imageFields,
      date,
      address,
      description,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input required name="title" type="text" id="title" />
      <label htmlFor="image-input0">Meetup Image</label>
      {imageFields.map((text, i) => {
        return (
          <div className={classes.image} key={i}>
            <input
              onChange={(e) => changeField(e.target.value, i)}
              value={text}
              required
              type="url"
              id={`image-input${i}`}
            />
            <button
              type="button"
              className="btn"
              onClick={i === 0 ? addField : () => removeField(i)}
            >
              {i === 0 ? "+" : "-"}
            </button>
          </div>
        );
      })}
      <label htmlFor="date">Meetup Date</label>
      <input required name="date" type="date" id="date" />
      <label htmlFor="address">Meetup Address</label>
      <input required name="address" type="text" id="address" />
      <label htmlFor="description">Meetup Description</label>
      <textarea
        required
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
