import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./Header.module.css";

function Header() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Link href="/">Meetups</Link>
      <nav className={classes.nav}>
        <Link href="/search">
          <a className={router.pathname === "/search" ? classes.active : ""}>
            Search
          </a>
        </Link>
        <Link href="/">
          <a className={router.pathname === "/" ? classes.active : ""}>
            All Meetups
          </a>
        </Link>
        <Link href="/new-meetup">
          <a
            className={router.pathname === "/new-meetup" ? classes.active : ""}
          >
            Add Meetup
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
