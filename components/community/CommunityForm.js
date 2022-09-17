import classes from "./CommunityForm.module.css";

const CommunityForm = ({ onAddCommunity }) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const { title, text } = Object.fromEntries(new FormData(event.target));

    onAddCommunity({
      title,
      text,
      date: new Date().toISOString().split("T")[0],
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
