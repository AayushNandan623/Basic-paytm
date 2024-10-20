import Input from "../components/Input";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import ButtonComp from "../components/ButtonComp";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-neutral-500 h-screen flex flex-col justify-center items-center">
        <div className=" bg-white rounded-lg flex flex-col justify-center w-1/4 p-6">
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your credentials to access your account"></SubHeading>
          <Input
            label="Email"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            example="aayush@gmail.com"
          ></Input>
          <Input
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <ButtonComp
            label="Sign In"
            onClick={async () => {
              try {
                const response = await axios.get(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    params: {
                      userName,
                      password,
                    },
                  }
                );
                localStorage.setItem("token", response.data.token);
                if (response.data.token) navigate("/dashboard");
              } catch (e) {
                console.log("Error while logging in ", e);
              }
            }}
          />
          <BottomWarning
            label="Don't have an account?"
            link="/signup"
            linkText="Sign Up"
          />
        </div>
      </div>
    </>
  );
}
export default Signin;
