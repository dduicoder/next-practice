import { useState } from "react";

import Pagination from "./Pagination";

import classes from "./Slider.module.css";

const Slider = ({ imgs }) => {
  const [page, setPage] = useState(1);

  const total = imgs.length;

  return (
    <section className={classes.container}>
      <div
        className={classes.slider}
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${(100 / total) * (page - 1)}%)`,
        }}
      >
        {imgs.map((img) => {
          return (
            <img key={img} src={img} style={{ width: `${100 / total}%` }} />
          );
        })}
      </div>
      <Pagination total={total} limit={1} page={page} setPage={setPage} />
    </section>
  );
};

export default Slider;
