function Balance({ balance }) {
  return (
    <div className=" flex items-center ">
      <div className=" font-bold text-xl m-6 mr-4">Your Balance</div>
      <div className="font-semibold text-lg "> ${balance}</div>
    </div>
  );
}
export default Balance;
