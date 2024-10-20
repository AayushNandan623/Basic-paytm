import Input from "../components/Input";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import ButtonComp from "../components/ButtonComp";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-neutral-500 h-screen flex flex-col justify-center items-center">
        <div className=" bg-white rounded-lg flex flex-col justify-center w-1/4 p-6">
          <Heading label="Sign Up" />
          <SubHeading label="Enter your credentials to access your account " />
          <Input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label="First Name"
            example="Aayush"
          />
          <Input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label="Last Name"
            example="Nandan"
          />
          <Input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            label="Email"
            example="aayush@gmail.com"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
          />
          <ButtonComp
            onClick={async (e) => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  userName,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              if (response.data.token) navigate("/dashboard");
            }}
            label="Sign Up"
          />
          <BottomWarning
            label="Already have an account?"
            link="/signin"
            linkText="Login"
          />
        </div>
      </div>
    </>
  );
}
export default Signup;
