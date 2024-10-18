import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import UserList from "../components/UserList";

function Dashboard() {
  return (
    <>
      <div className=" bg-white h-screen flex flex-col  tracking-tight">
        <Appbar></Appbar>
        <Balance balance={10000}></Balance>
        <UserList label="User" example="Search users..."></UserList>
      </div>
    </>
  );
}
export default Dashboard;
