import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SideNavigation from "./SideNavigation";

import classes from "./Header.module.css";
import Select from "../UI/Select";

const Header = () => {
  const [showSide, setShowSide] = useState(false);
  const [navLink, setNavLink] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (navLink) {
      router.push(`/${navLink}/write`);
    }
  }, [navLink, router]);

  const anchorClassName = (link) => {
    return router.pathname.startsWith(`/${link}`) ? classes.active : "";
  };

  const options = ["group", "meetups", "community"];

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
        <Link href="/group">
          <a className={anchorClassName("group")}>Group</a>
        </Link>
        <Link href="/meetups">
          <a className={anchorClassName("meetups")}>Meetups</a>
        </Link>
        <Link href="/community">
          <a className={anchorClassName("community")}>Community</a>
        </Link>
        <Select
          value={navLink}
          setValue={setNavLink}
          options={options}
          description="Write"
          className="btn-flat"
        />
      </nav>
    </header>
  );
};

export default Header;
