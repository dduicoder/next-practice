import { CSSTransition } from "react-transition-group";

import Backdrop from "../UI/Backdrop";
import Portal from "../UI/Portal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./MeetupModal.module.css";

const MeetupModal = ({ show, close, meetup }) => {
  const { title, date, address, description } = meetup;

  const submitHandler = (event) => {
    event.preventDefault();
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
          <div className={classes.modal}>
            <div className={classes.control}>
              <h1>Meetup</h1>
              <FontAwesomeIcon icon={faXmark} onClick={close} />
            </div>
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <address>Address: {address}</address>
            <p>Description: {description}</p>
            <form onSubmit={submitHandler}>
              <label htmlFor="meetup-description">Describe yourself</label>
              <textarea id="meetup-description" rows="5"></textarea>
              <div className={classes.action}>
                <p>Make sure that this is your correct meetup</p>
                <div>
                  <button className="btn" type="button" onClick={close}>
                    Cancel
                  </button>
                  <button className="btn-flat">Meetup!</button>
                </div>
              </div>
            </form>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
};

export default MeetupModal;
