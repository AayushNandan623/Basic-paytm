function ButtonComp({ label, onClick }) {
  return (
    <button
      className=" bg-black text-center text-white rounded-md p-2 pr-4 pl-4 mt-4 mb-4 tracking-tight hover:bg-gray-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default ButtonComp;
