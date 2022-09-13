import Link from "next/dist/client/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={classes.error}>
      <FontAwesomeIcon icon={faXmark} />
      <h3>404 Page not found</h3>
      <p>Could not find page.</p>
      <Link href="/">
        <button className="btn-flat">Home</button>
      </Link>
    </section>
  );
};

export default NotFound;
