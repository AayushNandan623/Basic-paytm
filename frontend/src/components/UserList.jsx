import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import axios from "axios";
function UserList({ label, example }) {
  const [user, setUser] = useState([]);
  const [userFilter, setUserFilter] = useState("");
  useEffect(() => {
    const func = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/bulk?filter=${userFilter}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setUser(response.data.user);
    };
    func();
  }, [userFilter]);
  return (
    <div className="flex flex-col p-6 pt-0">
      <div className=" text-black pb-4 font-bold text-xl">{label}</div>
      <input
        onChange={(e) => {
          setUserFilter(e.target.value);
        }}
        type="text"
        placeholder={example}
        className=" outline outline-1 outline-gray-400 p-2 pl-4 rounded-md text-steel-700 tracking-tight"
      ></input>
      {user.map((user, key) => {
        return (
          <UserItem
            key={key}
            firstName={user.firstName}
            lastName={user.lastName}
            userName={user.userName}
          ></UserItem>
        );
      })}
    </div>
  );
}
export default UserList;
