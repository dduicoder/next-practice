import classes from "./Community.module.css";

const Community = ({ community }) => {
  const { title, text, date } = community;
  return (
    <section className={classes.community}>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{text}</p>
    </section>
  );
};

export default Community;
