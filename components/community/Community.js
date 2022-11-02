import { useState } from "react";

import CommentsModal from "./CommentsModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Community.module.css";

const Community = ({ community }) => {
  const [showComments, setShowComments] = useState(false);

  const { title, text, date, views, likes, comments } = community;

  return (
    <>
      <section className={classes.community}>
        <h1>{title}</h1>
        <div>
          <p>
            {views} <FontAwesomeIcon icon={faEye} /> {likes}{" "}
            <FontAwesomeIcon icon={faThumbsUp} /> {comments}{" "}
            <FontAwesomeIcon icon={faComments} />
          </p>
          <p>{date}</p>
        </div>
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
