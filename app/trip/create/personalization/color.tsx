"use client";

import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ColorInput() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [save, setSave] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="w-[90%] h-full flex flex-col items-start justify-center gap-5">
      <h4 className="text-white text-[20px] font-bold">
        2. Choose a <span className="text-headingBlue">Trip Color</span>
      </h4>
      <div className="w-[90%] h-fit flex flex-row items-center justify-start md:ml-10 ml-5 gap-3">
        <div
          className={`${
            color === "yellow" ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[#EAB308]`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`${
            color === "green" ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[#10B981]`}
          onClick={() => setColor("green")}
        ></div>
        <div
          className={`${
            color === "violet" ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[#8B5CF6]`}
          onClick={() => setColor("violet")}
        ></div>
      </div>
      <div className="w-full h-fit flex flex-row items-center justify-start flex-wrap gap-3">
        <h4
          className="text-white text-[15px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-green-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
          onClick={() => {
            if (color.length === 0) {
              setSave(false);
              setError(true);
            } else {
              localStorage.setItem("tripColor", color);
              setSave(true);
              setError(false);
            }
          }}
        >
          {save ? (
            <FontAwesomeIcon
              icon={faCheck as IconProp}
              className="w-[50px] h-50px] "
            />
          ) : (
            "Save"
          )}
        </h4>
        {error && (
          <h4 className="text-white text-[15px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-red-500 md:ml-10 ml-5 border-red-500 border-4">
            Please choose a color
          </h4>
        )}
      </div>
    </div>
  );
}

export default ColorInput;
