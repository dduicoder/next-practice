import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.control}>
        <section>
          <span>Links</span>
          <a href="https://react-http-2cec4.web.app" target="_blank">
            Other site
          </a>
          <a href="https://velog.io/@ddui" target="_blank">
            Blog
          </a>
        </section>
        <section>
          <span>Contact</span>
          <span>+82 10 3314 6432</span>
          <span>sijinpark77@gmail.com</span>
        </section>
        <section>
          <span>About</span>
          <span>
            This is a toy project using Reactjs and Nextjs. How do you like it?
          </span>
        </section>
      </div>
      <p>Copyright 2022. All rights reserved by Sijin Park.</p>
    </footer>
  );
};

export default Footer;
