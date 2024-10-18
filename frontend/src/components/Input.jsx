function Input({ label, example, onChange }) {
  return (
    <div className="flex flex-col">
      <div className=" text-black pt-6 pb-2 font-semibold tracking-tight">
        {label}
      </div>
      <input
        onChange={onChange}
        type="text"
        placeholder={example}
        className=" outline outline-1 outline-gray-400 p-2 pl-3 rounded-md text-steel-700 tracking-tight"
      ></input>
    </div>
  );
}
export default Input;
