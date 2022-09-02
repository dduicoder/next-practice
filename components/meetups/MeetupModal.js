import { CSSTransition } from "react-transition-group";

import Backdrop from "../UI/Backdrop";
import Portal from "../UI/Portal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./MeetupModal.module.css";

const MeetupModal = ({ show, close, meetup }) => {
  const { title, images, date, address, description } = meetup;
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
          <div className={classes.modal}>
            <div className={classes.control}>
              <h1>Meetup</h1>
              <FontAwesomeIcon icon={faXmark} onClick={close} />
            </div>
            <h2>{title}</h2>
            <p>{date}</p>
            <address>{address}</address>
            <p>{description}</p>
            <label htmlFor="meetup-description">Description</label>
            <textarea id="meetup-description" rows="5"></textarea>
            <div className={classes.action}>
              <button className="btn-flat" onClick={close}>
                Meetup!
              </button>
            </div>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
};

export default MeetupModal;
