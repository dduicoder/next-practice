import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./Index.module.css";

const Index = () => {
  return (
    <section className={classes.index}>
      <h1>Post your meetups, Meetup with the world</h1>
      <p>
        Discover meetups all around the world and meet up with various peoples,
        Post your own meetup and be the host to your meetup.
      </p>
      <div className={classes.stats}>
        <div>
          <FontAwesomeIcon icon={faUsers} />
          <span>13 million</span> users
        </div>
        <div>
          <FontAwesomeIcon icon={faHandshakeSimple} />
          <span>1000 meetups</span> per day
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
          Total <span>3 million</span> meetups
        </div>
      </div>
      <div className={classes.action}>
        <Link href="/meetups">
          <button className="btn">View Meetups</button>
        </Link>
        <Link href="/new-meetup">
          <button className="btn-flat">Add Meetup</button>
        </Link>
      </div>
    </section>
  );
};

export default Index;
