import classes from "./Pagination.module.css";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <footer className={classes.pagination}>
      <button onClick={() => setPage(page === 1 ? numPages : page - 1)}>
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "" : classes.incurrent}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page === numPages ? 1 : page + 1)}>
        &gt;
      </button>
    </footer>
  );
};

export default Pagination;
