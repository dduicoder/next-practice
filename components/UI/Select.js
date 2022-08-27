import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Select.module.css";

const Select = ({ value, setValue, options }) => {
  const [showSelect, setShowSelect] = useState(false);

  const wrapperRef = useRef();

  const docMouseDownHandler = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      docMouseDownHandler(event)
    );

    return () => {
      document.removeEventListener("mousedown", (event) =>
        docMouseDownHandler(event)
      );
    };
  });

  return (
    <div ref={wrapperRef} className={classes.select}>
      <button className="btn" onClick={() => setShowSelect(!showSelect)}>
        {value}{" "}
        <FontAwesomeIcon
          className={showSelect ? classes.rotate : ""}
          icon={faAngleDown}
        />
      </button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showSelect}
        timeout={{ enter: 250, exit: 250 }}
        classNames={{
          enterActive: classes.open,
          exitActive: classes.close,
        }}
      >
        <ul>
          {options.map((val) => (
            <li
              className={val === value ? classes.current : ""}
              key={val}
              onClick={() => {
                setValue(val);
                setShowSelect(false);
              }}
            >
              {val}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Select;
