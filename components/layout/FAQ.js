import classes from "./FAQ.module.css";

const FAQ = () => {
  return (
    <section className={classes.faq}>
      <h1>FAQ</h1>
      <details>
        <summary>Bla Bla</summary>
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
