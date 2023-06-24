"use client";

export default function DayInput({
  setDay,
}: {
  setDay: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center mt-10 gap-3">
      <h2 className="text-white text-[30px] font-black">Enter Day</h2>
      <input
        type="number"
        className=" w-[55%] md:w-[40%] h-[50px] bg-[#A09E9E] rounded-lg px-5 text-white text-[15px] md:text-[20px] font-bold outline-none"
        placeholder="Day Number"
        onChange={(e) => {
          setDay(parseInt(e.target.value));
        }}
      ></input>
    </div>
  );
}
