import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import Portal from "./Portal";

import classes from "./Slider.module.css";

const Slider = ({ imgs }) => {
  const [index, setIndex] = useState(1);
  const [showImg, setShowImg] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const timeoutRef = useRef(null);

  const total = imgs.length;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === total ? 1 : prevIndex + 1));
    }, 2500);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section className={classes.container}>
      <Backdrop show={showImg} close={() => setShowImg(false)} />
      <Portal>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showImg}
          timeout={{ enter: 250, exit: 250 }}
          classNames={{
            enterActive: classes.open,
            exitActive: classes.close,
          }}
        >
          <img src={imgUrl} className={classes.focused} />
        </CSSTransition>
      </Portal>
      <div
        className={classes.slider}
        style={{
          width: `${total * 100}%`,
          transform: `translateX(calc(-${(100 / total) * (index - 1)}% - ${
            (index - 1) * 2
          }rem))`,
        }}
      >
        {imgs.map((img, i) => {
          return (
            <img
              onClick={() => {
                setShowImg(true);
                setImgUrl(img);
              }}
              key={i}
              src={img}
              style={{ width: `${100 / total}%` }}
            />
          );
        })}
      </div>
      <button
        className={classes.arrow}
        onClick={() => setIndex(index === 1 ? total : index - 1)}
      >
        &lt;
      </button>
      <button
        className={classes.arrow}
        onClick={() => setIndex(index === total ? 1 : index + 1)}
      >
        &gt;
      </button>
      <nav>
        {Array(total)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i + 1)}
              className={index === i + 1 ? classes.current : ""}
            />
          ))}
      </nav>
    </section>
  );
};

export default Slider;
