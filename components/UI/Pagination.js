import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./Pagination.module.css";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <section className={classes.pagination}>
      {page !== 1 && (
        <FontAwesomeIcon onClick={() => setPage(page - 1)} icon={faAngleLeft} />
      )}
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? classes.current : ""}
          >
            {i + 1}
          </button>
        ))}
      {page !== numPages && (
        <FontAwesomeIcon
          onClick={() => setPage(page + 1)}
          icon={faAngleRight}
        />
      )}
    </section>
  );
};

export default Pagination;
