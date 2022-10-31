import classes from "./CommunityForm.module.css";

const CommunityForm = ({ onWriteCommunity }) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const { title, text } = Object.fromEntries(new FormData(event.target));

    onWriteCommunity({
      title,
      text,
      date: new Date().toISOString().split("T")[0],
      views: 0,
      likes: 0,
      comments: 0,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input required pattern=".*\S+.*" name="title" type="text" id="title" />
      <label htmlFor="text">Text</label>
      <textarea required name="text" id="text" rows="10"></textarea>
      <div className={classes.action}>
        <button className="btn-flat">Submit</button>
      </div>
    </form>
  );
};

export default CommunityForm;
