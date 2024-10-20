import Line from "../components/Line";
import ProfilePic from "../components/ProfilePic";
import ButtonComp from "./ButtonComp";
import { useNavigate } from "react-router-dom";
function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-row justify-between items-center m-4">
        <div className=" font-bold text-2xl">Payments App</div>
        <div className=" flex justify items-center font-medium text-lg">
          Hello, User<div className="pr-3"></div>{" "}
          <ProfilePic char="U"></ProfilePic>
          <div className="pr-3"></div>{" "}
          <ButtonComp
            label="Log Out"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          ></ButtonComp>
        </div>
      </div>
      <Line></Line>
    </>
  );
}
export default Appbar;
