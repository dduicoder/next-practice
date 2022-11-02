import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./CommunityItem.module.css";

const CommunityItem = ({ community }) => {
  const { id, title, date, views, likes, comments } = community;

  const router = useRouter();

  return (
    <li
      className={classes.item}
      onClick={() => router.push(`/community/${id}`)}
    >
      {title} | {date} | {views} <FontAwesomeIcon icon={faEye} /> {likes}{" "}
      <FontAwesomeIcon icon={faThumbsUp} /> {comments}{" "}
      <FontAwesomeIcon icon={faComments} />
    </li>
  );
};

export default CommunityItem;
