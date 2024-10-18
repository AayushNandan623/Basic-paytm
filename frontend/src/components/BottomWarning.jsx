import { Link } from "react-router-dom";

function BottomWarning({ label, link, linkText }) {
  return (
    <div className=" text-black text-center font- tracking-tight">
      {label}{" "}
      <Link className=" underline font-semibold" to={link}>
        {linkText}
      </Link>
    </div>
  );
}
export default BottomWarning;
