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

  const router = useRouter();

  const Navigate = (link) => {
    router.push(`/${link}/write`);
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
        {options.map((option, i) => {
          return (
            <Link href={`/${option}`} key={i}>
              <a
                className={
                  router.pathname.startsWith(`/${option}`) ? classes.active : ""
                }
              >
                {option}
              </a>
            </Link>
          );
        })}
        <Select
          value={null}
          setValue={Navigate}
          options={options}
          description="write"
          className="btn-flat"
        />
      </nav>
    </header>
  );
};

export default Header;
