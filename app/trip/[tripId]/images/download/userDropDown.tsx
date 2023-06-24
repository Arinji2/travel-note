"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState } from "react";

export default function UserDropdown({
  index,
  setIndex,
  users,
  color,
}: {
  users: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  color: string;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${
        isActive ? " md:h-fit h-[280px] z-10 " : "h-fit "
      }relative h-fit transition-all ease-in-out duration-300`}
    >
      <div
        className="flex flex-row items-center justify-center gap-x-3 hover:cursor-pointer "
        onClick={() => setIsActive(!isActive)}
      >
        <h2 className="text-[40px] text-white font-black">Users</h2>
        <FontAwesomeIcon
          icon={faChevronRight as IconProp}
          className={`w-[30px] h-[35px] text-white transition-all ease-in-out duration-300 ${
            isActive ? "transform rotate-90 pt-6 pl-4" : "pt-3 "
          }`}
        />
      </div>
      <div
        className={`${
          isActive ? "h-[150px] " : "h-0 "
        } transition-all ease-in-out duration-300 overflow-hidden relative md:w-[300px] w-full bg-[#1E1E1E]  rounded-lg flex flex-col items-center justify-center gap-4`}
      >
        <div className="flex flex-col items-start justify-center gap-1  group w-[90%]">
          <div className="flex flex-row w-full items-center justify-start gap-3">
            <h2
              onClick={() =>
                index < users.length - 1
                  ? setIndex((prevIndex) => prevIndex + 1)
                  : ""
              }
              className={`${
                index < users.length - 1
                  ? "text-white group-hover:cursor-pointer "
                  : "text-gray-500 group-hover:cursor-default "
              }text-[15px] font-bold`}
            >
              Next User
            </h2>
            <FontAwesomeIcon
              icon={faChevronRight as IconProp}
              className="w-[15px] h-[15px] text-[--color]"
              style={{ "--color": color } as React.CSSProperties}
            />
          </div>
          <div className="w-0 h-[3px] bg-white origin-left group-hover:w-[70%] transition-all ease-in-out duration-300"></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-1  group w-[90%] line-clamp-1">
          <div className="flex flex-row w-[200px] items-center justify-start gap-3 line-clamp-2">
            <h2 className="text-white text-[15px] font-bold">Current User:</h2>
            <h2
              className="text-[--color] text-[15px] font-bold line-clamp-1"
              style={{ "--color": color } as React.CSSProperties}
            >
              {users[index]}
            </h2>
          </div>
          <div className="w-0 h-[3px] bg-white origin-left group-hover:w-[70%] transition-all ease-in-out duration-300"></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-1  group w-[90%]">
          <div className="flex flex-row w-[200px] items-center justify-start gap-3">
            <h2
              onClick={() =>
                index !== 0 ? setIndex((prevIndex) => prevIndex - 1) : ""
              }
              className={`${
                index == 0
                  ? "text-gray-500 group-hover:cursor-default "
                  : "text-white group-hover:cursor-pointer "
              }text-[15px] font-bold`}
            >
              Previous User
            </h2>
            <FontAwesomeIcon
              icon={faChevronLeft as IconProp}
              className="w-[15px] h-[15px] text-[--color]"
              style={{ "--color": color } as React.CSSProperties}
            />
          </div>
          <div className="w-0 h-[3px] bg-white origin-left group-hover:w-[70%] transition-all ease-in-out duration-300"></div>
        </div>
      </div>
    </div>
  );
}
