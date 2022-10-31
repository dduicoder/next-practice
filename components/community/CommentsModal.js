import { useNotification } from "../notification/NotificationProvider";

import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Backdrop from "../UI/Backdrop";
import Portal from "../UI/Portal";

import classes from "./CommentsModal.module.css";

const CommentsModal = ({ show, close }) => {
  const dispatch = useNotification();

  const submitHandler = (event) => {
    event.preventDefault();

    const { description } = Object.fromEntries(new FormData(event.target));

    if (description.trim().length === 0) {
      dispatch({
        type: "ERROR",
        message: "Please write a description",
        title: "Successful Request",
      });

      return;
    }

    dispatch({
      type: "SUCCESS",
      message: "Meetup request sent!",
      title: "Successful Request",
    });

    close();
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
              <h1>Comments</h1>
              <FontAwesomeIcon icon={faXmark} onClick={close} />
            </div>
          </div>
        </CSSTransition>
      </Portal>
    </>
  );
};

export default CommentsModal;
