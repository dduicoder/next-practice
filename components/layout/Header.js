import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SideNavigation from "./SideNavigation";

import classes from "./Header.module.css";

const Header = () => {
  const [showSide, setShowSide] = useState(false);

  const router = useRouter();

  return (
    <header className={classes.header}>
      <SideNavigation
        show={showSide}
        close={() => {
          setShowSide(false);
        }}
      />
      <Link href="/">Meetups</Link>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => {
          setShowSide(true);
        }}
      />
      <nav className={classes.nav}>
        <Link href="/meetups">
          <a
            className={
              router.pathname.startsWith("/meetups") ? classes.active : ""
            }
          >
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
};

export default Header;
