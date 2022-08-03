import classes from "./MeetupForm.module.css";

const MeetupForm = ({ onAddMeetup }) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const { title, image, address, description } = Object.fromEntries(
      new FormData(event.target)
    );

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
      <input name="title" type="text" id="title" required />
      <label htmlFor="image">Meetup Image</label>
      <input name="image" type="url" id="image" required />
      <label htmlFor="address">Address</label>
      <input name="address" type="text" id="address" required />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        required
        rows="5"
      ></textarea>
      <div className={classes.action}>
        <button className="btn">Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
