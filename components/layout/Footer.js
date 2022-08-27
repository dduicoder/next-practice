import Link from "next/dist/client/link";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.control}>
        <div>
          <span>Links</span>
          <a
            href="https://react-http-2cec4.web.app"
            target="_blank"
            rel="noreferrer"
          >
            Other site
          </a>
          <a href="https://velog.io/@ddui" target="_blank" rel="noreferrer">
            Blog
          </a>
        </div>
        <div>
          <span>Help</span>
          <Link href="/faq">FAQ</Link>
          <Link href="/terms-of-use">Terms of use</Link>
        </div>
        <div>
          <span>Contact</span>
          <span>+82 10 3314 6432</span>
          <span>sijinpark77@gmail.com</span>
        </div>
        <div>
          <span>About</span>
          <span>
            This is a toy project using Reactjs and Nextjs. How do you like it?
          </span>
        </div>
      </div>
      <p>Copyright 2022. All rights reserved by Sijin Park.</p>
    </footer>
  );
};

export default Footer;
