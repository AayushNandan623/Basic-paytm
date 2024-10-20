import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import UserList from "../components/UserList";
import axios from "axios";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {

    const getBalance = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/account/balance`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setBalance(response.data.balance);
    };
    getBalance();
  });
  return (
    <>
      <div className=" bg-white h-screen flex flex-col  tracking-tight">
        <Appbar></Appbar>
        <Balance balance={balance}></Balance>
        <UserList label="User" example="Search users..."></UserList>
      </div>
    </>
  );
}
export default Dashboard;
