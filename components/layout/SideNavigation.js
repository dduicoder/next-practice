import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUserGroup,
  faHandshakeSimple,
  faComments,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import Backdrop from "../UI/Backdrop";
import Portal from "../UI/Portal";

import classes from "./SideNavigation.module.css";

const SideNavigation = ({ show, close }) => {
  const router = useRouter();

  const LinkSection = ({ link, icon }) => {
    return (
      <>
        <button
          onClick={() => {
            router.push(`/${link}`);
            close();
          }}
          className={
            router.pathname.startsWith(`/${link}`) &&
            router.pathname !== `/${link}/write`
              ? "btn-flat"
              : "btn"
          }
        >
          All {link}
          <FontAwesomeIcon icon={icon} />
        </button>
        <button
          onClick={() => {
            router.push(`/${link}/write`);
            close();
          }}
          className={router.pathname === `/${link}/write` ? "btn-flat" : "btn"}
        >
          Add {link}
          <FontAwesomeIcon icon={faPen} />
        </button>
      </>
    );
  };

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
              <span>Group</span>
              <LinkSection link="group" icon={faUserGroup} />
              <span>Meetups</span>
              <LinkSection link="meetups" icon={faHandshakeSimple} />
              <span>Community</span>
              <LinkSection link="community" icon={faComments} />
            </nav>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
};

export default SideNavigation;
