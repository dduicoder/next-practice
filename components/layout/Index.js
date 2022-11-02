import { useEffect } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faUsers,
  faHandshakeSimple,
  faCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";
import Slider from "../UI/Slider";
import Footer from "./Footer";

import classes from "./Index.module.css";

const Index = () => {
  const imgs = [
    "https://www.meetup.com/blog/wp-content/uploads/2022/01/pexels-matheus-bertelli-3856033-945x630.jpg",
    "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    "https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((event) => {
      event.forEach((section) => {
        if (section.isIntersecting) {
          section.target.classList.add(classes.show);
        }
      });
    });

    const sections = document.querySelectorAll(`.${classes.wrapper} > section`);
    observer.observe(sections[0]);
    observer.observe(sections[1]);
    observer.observe(sections[2]);

    return () => observer.disconnect();
  });

  return (
    <>
      <div className={classes.wrapper}>
        <Header />
        <section className={classes.first}>
          <h1 className={classes.gradient}>
            Post your meetups, Meetup with the world
          </h1>
          <p>
            {/* Discover meetups all around the world and meetup with various
            peoples, Post your own meetup and be the host to your meetup. */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            nesciunt quaerat libero debitis adipisci, totam doloremque
            aspernatur iure repellendus odit dignissimos commodi facere ab
            beatae temporibus deleniti reprehenderit officiis consectetur!
          </p>
          <div className={classes.action}>
            <Link href="/meetups">
              <button className="btn">View Meetups</button>
            </Link>
            <Link href="/meetups/write">
              <button className="btn-flat">Add Meetup</button>
            </Link>
          </div>
          <span>Learn about us</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => {
              const wrapper = document.querySelector(`.${classes.wrapper}`);
              const header = document.querySelector(
                `.${classes.wrapper} > header`
              );
              wrapper.scrollTop = wrapper.offsetHeight - header.offsetHeight;
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
              {/* We offer you a well-made auto matching system. With this system,
              we have achieved an outstanding 93% success rate of meetups. This
              led us to 13 million users worldwide, 1000 meetups per day and a
              total of 3 million meetups. Do you want to know what the best part
              is? This is 100% free! */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              nostrum. Non architecto quo in modi. Beatae odio similique quod
              consequatur perferendis assumenda neque, earum magni atque ullam
              ipsam autem recusandae.
            </p>
          </div>
        </section>
        <section className={classes.third}>
          <h1 className={classes.gradient}>Interaction</h1>
          <Slider imgs={imgs} />
          <p>
            {/* We have had 3 million total meetups so far. In the process, we
            arranged various relationships. */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eius ea aliquid officia consequuntur itaque praesentium rem magnam
            unde harum commodi autem, culpa vel minus. Atque cum natus ea nisi.
          </p>
        </section>
        <Footer />
      </div>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={classes.up}
        onClick={() => {
          document.querySelector(`.${classes.wrapper}`).scrollTop = 0;
        }}
      />
    </>
  );
};

export default Index;
