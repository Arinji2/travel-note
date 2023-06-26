"use client";
import { faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

function SideNav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [tripId, setTripId] = useState<string>("");

  React.useEffect(() => {
    setTripId(window.location.pathname.split("/")[2]);
  }, []);
  return (
    <React.Fragment>
      {
        <div
          className={`${
            showNav ? "translate-x-0 " : "-translate-x-[2000px] "
          }fixed top-0 left-0 z-[100] md:w-[30vw] w-[90vw] h-[100svh] bg-[#2c2b2b] transition-all ease-in-out duration-700`}
        >
          <div className="w-[90%] h-full flex flex-col items-center justify-center gap-10">
            <Link
              href={`/trip/${tripId}/budget`}
              className="w-fit h-fit group hover:cursor-pointer"
            >
              <h1 className="text-[30px] text-white font-black">Budget</h1>
              <div className="w-0 group-hover:w-full transition-all ease-in-out duration-500 h-[6px] bg-white origin-left"></div>
            </Link>
            <Link
              href={`/trip/${tripId}/images`}
              className="w-fit h-fit group hover:cursor-pointer"
            >
              <h1 className="text-[30px] text-white font-black">Photos</h1>
              <div className="w-0 group-hover:w-full transition-all ease-in-out duration-500 h-[6px] bg-white origin-left"></div>
            </Link>
            <Link
              href={`/trip/${tripId}/settings`}
              className="w-fit h-fit group hover:cursor-pointer"
            >
              <h1 className="text-[30px] text-white font-black">Settings</h1>
              <div className="w-0 group-hover:w-full transition-all ease-in-out duration-500 h-[6px] bg-white origin-left"></div>
            </Link>
            <Link
              href={`/trip/${tripId}/documents`}
              className="w-fit h-fit group hover:cursor-pointer"
            >
              <h1 className="text-[30px] text-white font-black">Documents</h1>
              <div className="w-0 group-hover:w-full transition-all ease-in-out duration-500 h-[6px] bg-white origin-left"></div>
            </Link>
            <Link
              href={`/trip/${tripId}`}
              className="w-fit h-fit group hover:cursor-pointer"
            >
              <h1 className="text-[30px] text-white font-black">Home</h1>
              <div className="w-0 group-hover:w-full transition-all ease-in-out duration-500 h-[6px] bg-white origin-left"></div>
            </Link>
            <Link
              href={`/dashboard`}
              className="w-fit h-fit group hover:cursor-pointer mt-10"
            >
              <h1 className="text-[30px] text-white font-black p-4 pl-6 pr-6 rounded-lg shadow-black shadow-md border-headingBlue border-l-4 border-b-4 hover:text-headingBlue hover:bg-[#2c2b2b] transition-all ease-in-out duration-500">
                My Trips
              </h1>
            </Link>
          </div>
        </div>
      }
      <div className="w-[50px] h-[50px] flex flex-col items-center justify-center">
        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={faBars as IconProp}
          className={`${
            showNav
              ? "opacity-0 hidden h-0 w-0 absolute "
              : "opacity-100 block h-[50px] md:w-[70px] w-[50px] md:h-[70px] relative "
          }  text-5xl shrink-0 text-text hover:cursor-pointer transition-all ease-in-out duration-700 z-[200]`}
        />
        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={faTimes as IconProp}
          className={`${
            showNav
              ? "opacity-100 block relative "
              : "opacity-0 hidden absolute "
          } h-[50px] md:w-[70px] w-[50px] md:h-[70px] text-5xl text-text hover:cursor-pointer transition-all ease-in-out duration-700 z-[200]`}
        />
      </div>
    </React.Fragment>
  );
}

export default SideNav;
