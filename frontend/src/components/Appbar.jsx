import Line from "../components/Line";
import ProfilePic from "../components/ProfilePic";
function Appbar() {
  return (
    <>
      <div className=" flex flex-row justify-between items-center m-4">
        <div className=" font-bold text-2xl">Payments App</div>
        <div className=" flex justify items-center font-medium text-lg">
          Hello, User<div className="p-1"></div>{" "}
          <ProfilePic char="U"></ProfilePic>
        </div>
      </div>
      <Line></Line>
    </>
  );
}
export default Appbar;
