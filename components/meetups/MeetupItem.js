import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

function MeetupItem({ id, title, image, address }) {
  const router = useRouter();

  const showDetail = () => {
    router.push("/" + id);
  };

  return (
    <li className={`card ${classes.item}`}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <address>{address}</address>
      <button onClick={showDetail} className="btn">
        Show Details
      </button>
    </li>
  );
}

export default MeetupItem;
