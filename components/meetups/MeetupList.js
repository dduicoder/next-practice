import { Fragment, useState } from "react";

import MeetupItem from "./MeetupItem";
import Pagination from "../UI/Pagination";
import Select from "../UI/Select";

import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState("title");

  const limit = 10;

  const offset = (page - 1) * limit;

  const options = ["title", "address", "description"];

  let sortedMeetups;

  sortedMeetups = meetups.filter((meetup) => {
    const current =
      searchOption === "title"
        ? meetup.title
        : searchOption === "address"
        ? meetup.address
        : meetup.description;
    if (current.toLowerCase().includes(search.toLowerCase())) {
      return meetup;
    }
    return null;
  });

  return (
    <Fragment>
      <div className={classes.control}>
        <input
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <Select
          value={searchOption}
          setValue={setSearchOption}
          list={options}
          text={"Search: "}
        />
      </div>
      {sortedMeetups.length !== 0 ? (
        <Fragment>
          <ul className={classes.list}>
            {sortedMeetups.slice(offset, offset + limit).map((meetup) => (
              <MeetupItem meetup={meetup} key={meetup.id} id={meetup.id} />
            ))}
          </ul>
          <Pagination
            total={sortedMeetups.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </Fragment>
      ) : (
        <p style={{ textAlign: "center" }}>- No Result -</p>
      )}
    </Fragment>
  );
};

export default MeetupList;
