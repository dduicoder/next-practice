import classes from "./FAQ.module.css";

const FAQ = () => {
  const first = [
    "Why can't I post a meetup without logging in?",
    "How do I sign up?",
    "How do I log in?",
  ];

  const second = [
    "How do I post a meetup?",
    "How do I delete a meetup?",
    "How do I edit a meetup?",
  ];

  return (
    <section className={classes.faq}>
      <h1>Frequently asked questions</h1>
      <h3>Authentication</h3>
      {first.map((text, i) => (
        <details key={i}>
          <summary>{text}</summary>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint dolorem quos, dolor perspiciatis mollitia similique esse culpa
            explicabo officiis ab est consectetur, rem quo ullam quaerat eius
            eveniet aperiam?
          </span>
        </details>
      ))}
      <h3>Posting meetups</h3>
      {second.map((text, i) => (
        <details key={i}>
          <summary>{text}</summary>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint dolorem quos, dolor perspiciatis mollitia similique esse culpa
            explicabo officiis ab est consectetur, rem quo ullam quaerat eius
            eveniet aperiam?
          </span>
        </details>
      ))}
    </section>
  );
};

export default FAQ;
