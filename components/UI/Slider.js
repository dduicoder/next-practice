import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import classes from "./Slider.module.css";

const Slider = ({ imgs }) => {
  if (imgs.length === 1) {
    return (
      <section className={classes.container}>
        <img src={imgs[0]} />
      </section>
    );
  }
  const router = useRouter();

  const [index, setIndex] = useState(1);

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
          return <img key={i} src={img} style={{ width: `${100 / total}%` }} />;
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
              key={i + 1}
              onClick={() => setIndex(i + 1)}
              className={index === i + 1 ? classes.current : ""}
            />
          ))}
      </nav>
    </section>
  );
};

export default Slider;
