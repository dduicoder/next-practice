import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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

  const date = new Date();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Meetup Title</label>
      <input required pattern=".*\S+.*" name="title" type="text" id="title" />
      <div className={classes.info}>
        <label htmlFor="image-input0">Meetup Image</label>
        <div data="Input image URL">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
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
      <div className={classes.info}>
        <label htmlFor="date">Meetup Date</label>
        <div data="Minimum date: today">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
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
      <label htmlFor="description">Meetup Description</label>
      <textarea name="description" id="description" rows="5"></textarea>
      <div className={classes.action}>
        <button className="btn">Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
