import { useRouter } from "next/router";
import Link from "next/link";

const GroupList = ({ groups }) => {
  const router = useRouter();

  return (
    <>
      <Link href="/group/create">
        <button className="btn-flat">Create a group</button>
      </Link>
      <ul>
        {groups.map((group, i) => {
          return (
            <li onClick={() => router.push(`/group/${group.id}`)} key={i}>
              {group.title} | {group.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GroupList;
