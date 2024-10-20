import ButtonComp from "./ButtonComp";
import ProfilePic from "./ProfilePic";
import { useNavigate } from "react-router-dom";
function UserItem({ firstName, lastName, userName }) {
  let initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
  const to = userName;
  const navigate = useNavigate();
  return (
    <div className="flex mt-4 items-center justify-between w-full">
      <div className="flex justify-center items-center">
        <ProfilePic char={initials}></ProfilePic>
        <div className=" ml-2">
          {firstName} {lastName}
        </div>
      </div>
      <ButtonComp
        label="Send Money"
        onClick={() => {
          navigate(`/send/${to}`);
        }}
      ></ButtonComp>
    </div>
  );
}
export default UserItem;
