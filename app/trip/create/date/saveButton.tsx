"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SaveButon() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  return (
    <div className="w-[90%] h-full flex flex-row items-center justify-start gap-5">
      <h4
        className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500 md:ml-10 ml-5  hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
        onClick={() => {
          const area = localStorage.getItem("tripArea");
          const date = localStorage.getItem("tripDate");

          if (area === null) {
            setError(true);
            setMessage("Please choose Area");
          } else if (date === null) {
            setError(true);
            setMessage("Please select Date");
          } else {
            router.push("/trip/create/budget");
          }
        }}
      >
        Continue
      </h4>
      {error && (
        <h4 className="text-white md:text-[20px] text-[15px] font-bold p-2 pl-6 pr-6 text-center rounded-[5px] bg-red-500 md:ml-10 ml-5 border-red-500 border-4">
          {message}
        </h4>
      )}
    </div>
  );
}

export default SaveButon;
