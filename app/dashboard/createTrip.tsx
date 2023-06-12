"use client";

import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function CreateTrip() {
  return (
    <Link
      href="/trip/create/personalization"
      className="w-[90vw] md:w-[400px] h-[300px] bg-[#3F3D56] rounded-lg flex flex-col items-center justify-center m-2 gap-5 hover:shadow-md hover:shadow-black transition-all ease-in-out duration-300 hover:cursor-pointer"
    >
      <h2 className="font-bold text-[50px]">Create Trip</h2>
      <FontAwesomeIcon
        icon={faPlus as IconProp}
        className="w-[40px] h-[40px] text-headingBlue"
      />
    </Link>
  );
}

export default CreateTrip;
