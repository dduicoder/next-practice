import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUsers,
  faHandshakeSimple,
  faCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";

import classes from "./Index.module.css";

const Index = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.first}>
        <h1>Post your meetups, Meetup with the world</h1>
        <p>
          Discover meetups all around the world and meetup with various peoples,
          Post your own meetup and be the host to your meetup.
        </p>
        <div className={classes.action}>
          <Link href="/meetups">
            <button className="btn">View Meetups</button>
          </Link>
          <Link href="/new-meetup">
            <button className="btn-flat">Add Meetup</button>
          </Link>
        </div>
        <span>Learn about us</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => {
            document.querySelector(`.${classes.second}`).scrollIntoView();
          }}
        />
      </section>
      <section className={classes.second}>
        <div>
          <h1>Meetup with the world!</h1>
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
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
              93% chance of meeting
            </div>
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
              Auto matching system
            </div>
            <div>
              <FontAwesomeIcon icon={faCircleCheck} />
              100% free
            </div>
          </div>
          <p>
            We offer you a well-made auto matching system. With this system, we
            have achieved an outstanding 93% success rate of meetups. This led
            us to 13 million users worldwide, 1000 meetups per day and a total
            of 3 million meetups. Do you want to know what the best part is?
            It's all free!
          </p>
        </div>
      </section>
      <section className={classes.third}>
        <h1>We change the world with Love and Interaction</h1>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
