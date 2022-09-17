import CommunityItem from "./CommunityItem";

import classes from "./CommunityList.module.css";

const CommunityList = ({ communitys }) => {
  return (
    <section>
      <h1 className={classes.title}>Meetup community</h1>
      <ul>
        {communitys.map((community, i) => {
          return <CommunityItem key={i} community={community} />;
        })}
      </ul>
    </section>
  );
};

export default CommunityList;
