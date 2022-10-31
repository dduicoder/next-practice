import { useState, useEffect } from "react";

import classes from "./Notification.module.css";

const Notification = ({ dispatch, id, message, type }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setWidth((prevData) => {
        if (prevData < 100) {
          return prevData + 5;
        }

        clearInterval(id);
        return prevData;
      });
    }, 200);

    setIntervalID(id);
  };

  const pauseTimer = () => {
    clearInterval(intervalID);
  };

  const closeNotification = () => {
    pauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id,
      });
    }, 250);
  };

  useEffect(() => {
    if (width >= 100) {
      closeNotification();
    }
  }, [width]);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
      onClick={closeNotification}
      className={`${classes.notification}  ${exit ? classes.close : ""}`}
    >
      {message}
      <div
        className={`${classes.bar} ${
          type === "SUCCESS" ? classes.success : classes.error
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default Notification;
