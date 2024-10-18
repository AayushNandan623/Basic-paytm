import Input from "../components/Input";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import ButtonComp from "../components/ButtonComp";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";

function Signin() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className=" bg-neutral-500 h-screen flex flex-col justify-center items-center">
        <div className=" bg-white rounded-lg flex flex-col justify-center w-1/4 p-6">
          <Heading label="Sign In"></Heading>
          <SubHeading label="Enter your credentials to access your account"></SubHeading>
          <Input label="Email" example="aayush@gmail.com"></Input>
          <Input label="Password"></Input>
          <ButtonComp label="Sign Up" />
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
