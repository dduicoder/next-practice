import classes from "./Pagination.module.css";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <section className={classes.pagination}>
      {page !== 1 && <button onClick={() => setPage(page - 1)}>&lt;</button>}
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "" : classes.incurrent}
          >
            {i + 1}
          </button>
        ))}
      {page !== numPages && (
        <button onClick={() => setPage(page + 1)}>&gt;</button>
      )}
    </section>
  );
};

export default Pagination;
