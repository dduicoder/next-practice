import { useState } from "react";

import MeetupItem from "./MeetupItem";
import Pagination from "../UI/Pagination";
import Select from "../UI/Select";

import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("title");

  const limit = 10;

  const offset = (page - 1) * limit;

  const options = ["title", "address", "description"];

  const filteredMeetups = meetups.filter((meetup) => {
    const value =
      searchOption === "title"
        ? meetup.title
        : searchOption === "address"
        ? meetup.address
        : meetup.description;
    if (value.toLowerCase().includes(searchText.toLowerCase())) {
      return meetup;
    }
    return null;
  });

  return (
    <>
      <div className={classes.control}>
        <input
          placeholder="Search..."
          onChange={(event) => {
            setSearchText(event.target.value);
            setPage(1);
          }}
          value={searchText}
        />
        <Select
          value={searchOption}
          setValue={setSearchOption}
          options={options}
        />
      </div>
      {filteredMeetups.length !== 0 ? (
        <>
          <ul className={classes.list}>
            {filteredMeetups.slice(offset, offset + limit).map((meetup) => (
              <MeetupItem meetup={meetup} key={meetup.id} />
            ))}
          </ul>
          <Pagination
            total={filteredMeetups.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <p className={classes.error}>- No Result -</p>
      )}
    </>
  );
};

export default MeetupList;
