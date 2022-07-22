import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

function MeetupItem({ id, title, image, address, description }) {
  const router = useRouter();

  return (
    <li
      className={classes.item}
      onClick={() => {
        router.push("/" + id);
      }}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <address>{address}</address>
      <p>
        {description.length > 50
          ? description.substr(0, 50) + "..."
          : description}
      </p>
    </li>
  );
}

export default MeetupItem;
