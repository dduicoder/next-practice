import { Fragment, useState } from "react";

import Select from "../UI/Select";

import classes from "./SearchList.module.css";
import MeetupList from "../meetups/MeetupList";

const SearchList = ({ meetups }) => {
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState("title");

  const options = ["title", "address", "description"];

  let sortedMeetups;

  if (searchOption === "title") {
    sortedMeetups = meetups.filter((meetup) => {
      if (meetup.title.toLowerCase().includes(search.toLowerCase())) {
        return meetup;
      }
      return null;
    });
  } else if (searchOption === "address") {
    sortedMeetups = meetups.filter((meetup) => {
      if (meetup.address.toLowerCase().includes(search.toLowerCase())) {
        return meetup;
      }
      return null;
    });
  } else if (searchOption === "description") {
    sortedMeetups = meetups.filter((meetup) => {
      if (meetup.description.toLowerCase().includes(search.toLowerCase())) {
        return meetup;
      }
      return null;
    });
  } else {
    sortedMeetups = meetups;
  }

  return (
    <Fragment>
      <div className={classes.control}>
        <input
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <Select
          value={searchOption}
          setValue={setSearchOption}
          list={options}
          text={"Search: "}
        />
      </div>
      {sortedMeetups.length !== 0 ? (
        <MeetupList meetups={sortedMeetups} />
      ) : (
        <p style={{ textAlign: "center" }}>- No Result -</p>
      )}
    </Fragment>
  );
};

export default SearchList;
