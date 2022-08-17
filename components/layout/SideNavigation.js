import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Portal from "../UI/Portal";

import classes from "./SideNavigation.module.css";

const SideNavigation = ({ show, close }) => {
  const router = useRouter();
  return (
    <Portal>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={{ enter: 250, exit: 250 }}
        classNames={{
          enterActive: classes.open,
          exitActive: classes.close,
        }}
      >
        <nav className={classes.nav}>
          <div className={classes.control}>
            <span>Navigate</span>
            <span onClick={close}>X</span>
          </div>
          <button
            onClick={() => {
              router.push("/meetups");
              close();
            }}
            className={`btn ${
              router.pathname.startsWith("/meetups") ? classes.active : ""
            }`}
          >
            All Meetups
          </button>
          <button
            onClick={() => {
              router.push("/new-meetup");
              close();
            }}
            className={`btn ${
              router.pathname === "/new-meetup" ? classes.active : ""
            }`}
          >
            Add Meetup
            <FontAwesomeIcon icon={faPen} />
          </button>
        </nav>
      </CSSTransition>
    </Portal>
  );
};

export default SideNavigation;
