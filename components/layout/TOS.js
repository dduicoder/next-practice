const TOS = () => {
  return (
    <section>
      <h1>Terms of use</h1>
      {Array(5)
        .fill()
        .map((_, i) => (
          <p key={i}>
            {i + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Similique quos ea quam quasi saepe odit error ratione, atque officia
            commodi nobis et doloribus exercitationem cumque necessitatibus
            eligendi fuga eaque delectus?
          </p>
        ))}
    </section>
  );
};

export default TOS;
