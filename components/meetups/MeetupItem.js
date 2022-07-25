import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup, id }) => {
  const router = useRouter();

  const { title, image, address, description } = meetup;

  return (
    <li
      className={classes.item}
      onClick={() => {
        router.push("/" + id);
      }}
    >
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <address>{address}</address>
      <p>
        {description.length > 50
          ? description.substr(0, 50) + "..."
          : description}
      </p>
    </li>
  );
};

export default MeetupItem;
