import { useState } from "react";
import UserItem from "./UserItem";

function UserList({ label, example }) {
  const [user, setUser] = useState([
    { firstName: "Aayush", lastName: "Nandan" },
  ]);
  return (
    <div className="flex flex-col p-6 pt-0">
      <div className=" text-black pb-4 font-bold text-xl">{label}</div>
      <input
        type="text"
        placeholder={example}
        className=" outline outline-1 outline-gray-400 p-2 pl-4 rounded-md text-steel-700 tracking-tight"
      ></input>
      {user.map((user, key) => {
        return (
          <UserItem
            firstName={user.firstName}
            lastName={user.lastName}
          ></UserItem>
        );
      })}
    </div>
  );
}
export default UserList;
