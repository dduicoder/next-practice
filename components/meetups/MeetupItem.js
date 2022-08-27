import { useRouter } from "next/router";
import Image from "next/image";

import classes from "./MeetupItem.module.css";

// const imageLoader = ({ src, width }) => {
//   const url = `https://next-practice-amber.vercel.app/resize=width:${width}/${src
//     .split("/")
//     .pop()}`;
//   console.log(url);
//   return url;
// };

const MeetupItem = ({ meetup }) => {
  const { id, title, images, date, address, description } = meetup;

  const router = useRouter();

  return (
    <li
      className={classes.item}
      onClick={() => {
        router.push("meetups/" + id);
      }}
    >
      <div className={classes.img}>
        <Image
          // loader={imageLoader}
          src={images[0]}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className={classes.text}>
        <h3>{title}</h3>
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
