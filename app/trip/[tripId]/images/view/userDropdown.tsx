"use client";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";

export default function UserDropdown({
  nextUser,
  prevUser,
  user,

  day,
  tripId,
  color,
}: {
  nextUser: string;
  prevUser: string;
  user: string;

  day: string;
  tripId: string;
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
          isActive ? "opacity-100 " : "opacity-0 "
        } transition-all ease-in-out duration-300 absolute w-[300px] bg-[#1E1E1E] h-[150px] rounded-lg flex flex-col items-center justify-center gap-4`}
      >
        <Link
          href={
            nextUser == undefined
              ? `/trip/${tripId}/images/view?day=${day}&user=${user}`
              : `/trip/${tripId}/images/view?day=${day}&user=${nextUser}`
          }
          className="flex flex-col items-start justify-center gap-1 hover:cursor-pointer group w-[90%]"
        >
          <div className="flex flex-row w-full items-center justify-start gap-3">
            <h2
              className={`${
                nextUser == undefined ? "text-gray-500 " : "text-white "
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
        </Link>
        <div className="flex flex-col items-start justify-center gap-1  group w-[90%]">
          <div className="flex flex-row w-full items-center justify-start gap-3 line-clamp-1">
            <h2 className="text-white text-[15px] font-bold">Current User:</h2>
            <h2
              className="text-[--color] text-[15px] font-bold"
              style={{ "--color": color } as React.CSSProperties}
            >
              {user}
            </h2>
          </div>
          <div className="w-0 h-[3px] bg-white origin-left group-hover:w-[70%] transition-all ease-in-out duration-300"></div>
        </div>
        <Link
          href={
            prevUser == undefined
              ? `/trip/${tripId}/images/view?day=${day}$user=${user}`
              : `/trip/${tripId}/images/view/?day=${day}&user=${prevUser}`
          }
          className="flex flex-col items-start justify-center gap-1 hover:cursor-pointer group w-[90%]"
        >
          <div className="flex flex-row w-full items-center justify-start gap-3">
            <h2
              className={`${
                prevUser == undefined ? "text-gray-500 " : "text-white "
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
        </Link>
      </div>
    </div>
  );
}
