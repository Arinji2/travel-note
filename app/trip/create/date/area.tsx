"use client";
import * as React from "react";
import { useState } from "react";

function AreaInput() {
  const [area, setArea] = useState("");
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
      <h4 className="text-white text-[20px] font-bold">
        2. Set a <span className="text-headingRed">Location</span>
      </h4>
      <div className="flex flex-row items-center justify-start gap-2">
        <p
          className={`${
            area === "Domestic" ? "shadow-lg shadow-black " : ""
          }text-white text-[20px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-violet-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black`}
          onClick={() => {
            setArea("Domestic");
            localStorage.setItem("tripArea", "Domestic");
          }}
        >
          Domestic
        </p>
        <p
          className={`${
            area === "International" ? "shadow-lg shadow-black " : ""
          }text-white text-[20px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-yellow-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black`}
          onClick={() => {
            setArea("International");
            localStorage.setItem("tripArea", "International");
          }}
        >
          International
        </p>
      </div>
    </div>
  );
}

export default AreaInput;
