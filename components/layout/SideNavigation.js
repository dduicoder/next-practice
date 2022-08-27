import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faHandshakeSimple,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import Backdrop from "../UI/Backdrop";
import Portal from "../UI/Portal";

import classes from "./SideNavigation.module.css";

const SideNavigation = ({ show, close }) => {
  const router = useRouter();
  return (
    <>
      <Backdrop show={show} close={close} />
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
          <div className={classes.side}>
            <div className={classes.control}>
              <span>Navigate</span>
              <FontAwesomeIcon icon={faXmark} onClick={close} />
            </div>
            <nav>
              <button
                onClick={() => {
                  router.push("/meetups");
                  close();
                }}
                className={
                  router.pathname.startsWith("/meetups") ? "btn-flat" : "btn"
                }
              >
                All Meetups
                <FontAwesomeIcon icon={faHandshakeSimple} />
              </button>
              <button
                onClick={() => {
                  router.push("/new-meetup");
                  close();
                }}
                className={
                  router.pathname === "/new-meetup" ? "btn-flat" : "btn"
                }
              >
                Add Meetup
                <FontAwesomeIcon icon={faPen} />
              </button>
            </nav>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
};

export default SideNavigation;
