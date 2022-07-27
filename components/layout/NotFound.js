import Link from "next/dist/client/link";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <h3>404 Page not found</h3>
      <p>Could not find page.</p>
      <Link href="/meetups">Home</Link>
    </div>
  );
};

export default NotFound;