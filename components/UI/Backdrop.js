import { CSSTransition } from "react-transition-group";

import Portal from "./Portal";

import classes from "./Backdrop.module.css";

const Backdrop = ({ show, close }) => {
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
        <div className={classes.backdrop} onClick={close} />
      </CSSTransition>
    </Portal>
  );
};

export default Backdrop;
