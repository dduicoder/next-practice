import { useRouter } from "next/router";

import classes from "./CommunityItem.module.css";

const CommunityItem = ({ community }) => {
  const { id, title, text, date } = community;

  const router = useRouter();

  return (
    <li
      className={classes.item}
      onClick={() => router.push(`/community/${id}`)}
    >
      {title} | {date}
    </li>
  );
};

export default CommunityItem;
