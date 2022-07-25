import { Fragment, useState } from "react";

import MeetupItem from "./MeetupItem";
import Pagination from "../UI/Pagination";

import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  const [page, setPage] = useState(1);

  const limit = 10;

  const offset = (page - 1) * limit;

  return (
    <Fragment>
      <ul className={classes.list}>
        {meetups.slice(offset, offset + limit).map((meetup) => (
          <MeetupItem meetup={meetup} key={meetup.id} id={meetup.id} />
        ))}
      </ul>
      <Pagination
        total={meetups.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Fragment>
  );
};

export default MeetupList;
