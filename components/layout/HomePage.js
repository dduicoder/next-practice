import Link from "next/link";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={classes.home}>
      <h1>Post your meetups, Meetup with the world</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className={classes.stats}>
        <div>
          <span>13 million</span> users worldwide
        </div>
        <div>
          <span>500 meetups</span> per day
        </div>
        <div>
          Total <span>3 million</span> meetups
        </div>
      </div>
      <div>
        <Link href="/meetups">
          <button className="btn">View Meetups</button>
        </Link>
        <Link href="/new-meetup">
          <button className="btn-flat">Add Meetups</button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
