import { useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Sendmoney() {
  const [amount, setAmount] = useState(0);
  const { to } = useParams();
  const navigate = useNavigate();
  console.log(to);
  const initials = to[0].toLocaleUpperCase();
  return (
    <>
      <div className=" bg-slate-200 h-screen w-screen flex flex-col justify-center items-center tracking-tighter">
        <div className=" bg-white rounded-lg flex flex-col justify-center w-1/3 p-10">
          <div className=" mt-10"></div>
          <Heading label="Send Money"></Heading>
          <div className="flex items-center mt-10">
            <div className=" bg-green-500 rounded-full text-white p-3 m-2text-xl font-semibold">
              {initials}
            </div>
            <div className=" font-bold text-lg">{to}</div>
          </div>
          <div className=" font-semibold">Amount (in Rs)</div>
          <input
            type="text"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount"
            className=" outline outline-1 outline-gray-400 p-2 pl-3 rounded-md text-steel-700 tracking-tight"
          ></input>
          <button
            onClick={async (e) => {
              try {
                console.log({
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                });
                await axios.patch(
                  "http://localhost:3000/api/v1/account/transfer",

                  {
                    payeeUserName: to,
                    amount: parseInt(amount),
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                navigate("/dashboard");
              } catch (e) {
                console.log("Error sending request to transfer money", e);
              }
            }}
            className=" bg-green-500 text-center text-white rounded-md p-2 pr-4 pl-4 mt-4 mb-4 tracking-tight hover:bg-green-400"
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </>
  );
}
export default Sendmoney;
