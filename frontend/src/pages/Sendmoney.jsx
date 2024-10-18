import { useState } from "react";
import Heading from "../components/Heading";

function Sendmoney() {
  const [payee, setPayee] = useState({
    firstName: "Himanshu",
    lastName: "Kumar",
  });
  const initials = payee.firstName[0] + payee.lastName[0];
  return (
    <>
      <div className=" bg-slate-200 h-screen w-screen flex flex-col justify-center items-center tracking-tighter">
        <div className=" bg-white rounded-lg flex flex-col justify-center w-1/3 p-10">
          <div className=" mt-10"></div>
          <Heading label="Send Money"></Heading>
          <div className="flex items-center mt-10">
            <div className=" bg-green-500 rounded-full text-white p-3 text-xl font-semibold">
              {initials}
            </div>
            <div className=" font-bold text-xl">
              {payee.firstName} {payee.lastName}
            </div>
          </div>
          <div className=" font-semibold">Amount (in Rs)</div>
          <input
            type="text"
            placeholder="Enter amount"
            className=" outline outline-1 outline-gray-400 p-2 pl-3 rounded-md text-steel-700 tracking-tight"
          ></input>
          <button className=" bg-green-500 text-center text-white rounded-md p-2 pr-4 pl-4 mt-4 mb-4 tracking-tight hover:bg-green-400">
            Initiate Transfer
          </button>
        </div>
      </div>
    </>
  );
}
export default Sendmoney;
