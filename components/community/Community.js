import { useState } from "react";
import CommentsModal from "./CommentsModal";
import classes from "./Community.module.css";

const Community = ({ community }) => {
  const [showComments, setShowComments] = useState(false);

  const { title, text, date } = community;
  return (
    <>
      <section className={classes.community}>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{text}</p>
      </section>
      <button className="btn-flat" onClick={() => setShowComments(true)}>
        Comments
      </button>
      <CommentsModal show={showComments} close={() => setShowComments(false)} />
    </>
  );
};

export default Community;
