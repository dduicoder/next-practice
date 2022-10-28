const GroupForm = ({ onWriteGroup }) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const { title, text } = Object.fromEntries(new FormData(event.target));

    onWriteGroup({
      title,
      text,
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input required pattern=".*\S+.*" name="title" type="text" id="title" />
      <label htmlFor="text">Text</label>
      <input required pattern=".*\S+.*" name="text" type="text" id="text" />
      <button className="btn-flat">Submit</button>
    </form>
  );
};

export default GroupForm;
