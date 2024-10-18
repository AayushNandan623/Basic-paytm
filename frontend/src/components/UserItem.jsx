import ButtonComp from "./ButtonComp";
import ProfilePic from "./ProfilePic";

function UserItem({ firstName, lastName }) {
  let initals = firstName[0].toUpperCase() + lastName[0].toUpperCase();
  return (
    <div className="flex mt-4 items-center justify-between w-full">
      <div className="flex justify-center items-center">
        <ProfilePic char={initals}></ProfilePic>
        <div className=" ml-2">
          {firstName} {lastName}
        </div>
      </div>
      <ButtonComp label="Send Money"></ButtonComp>
    </div>
  );
}
export default UserItem;
