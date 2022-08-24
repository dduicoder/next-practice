import classes from "./FAQ.module.css";

const FAQ = () => {
  return (
    <section className={classes.faq}>
      <h1>Frequently asked questions</h1>
      <h3>Authentication</h3>
      <details>
        <summary>Why can't I post a meetup without logging in?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
      <details>
        <summary>Can I do this?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
      <details>
        <summary>Is this possible?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
      <details>
        <summary>How do I sign up?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
      <h3>Posting meetups</h3>
      <details>
        <summary>How do I post a meetup?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
      <details>
        <summary>How do I delete a meetup?</summary>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          dolorem quos, dolor perspiciatis mollitia similique esse culpa
          explicabo officiis ab est consectetur, rem quo ullam quaerat eius
          eveniet aperiam?
        </span>
      </details>
    </section>
  );
};

export default FAQ;
