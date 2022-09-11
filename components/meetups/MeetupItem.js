import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup }) => {
  const { id, title, tags, images, date, address, description } = meetup;

  const router = useRouter();

  return (
    <li
      className={classes.item}
      onClick={() => {
        router.push("meetups/" + id);
      }}
    >
      <div className={classes.img}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={classes.text}>
        <h3>{title}</h3>
        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <p>{date}</p>
        <address>{address}</address>
        <p>
          {description.length > 50
            ? description.substr(0, 50) + "..."
            : description}
        </p>
      </div>
    </li>
  );
};

export default MeetupItem;
