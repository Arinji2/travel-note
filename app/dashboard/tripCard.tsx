"use client";

import { UserTrip } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";

function TripCard({ tripData }: { tripData: UserTrip }) {
  const [status, setStatus] = useState("text-white");
  useEffect(() => {
    if (tripData.status === "Ongoing") setStatus("text-green-400");
    else if (tripData.status === "Completed") setStatus("text-red-400");
    else setStatus("text-yellow-400");
  });
  return (
    <Link
      href={`/trip/${tripData.id}`}
      className="w-[90vw] md:w-[400px] h-[300px] bg-[#3F3D56] rounded-lg flex flex-col items-center justify-start m-2 gap-10 hover:shadow-md hover:shadow-black transition-all ease-in-out duration-300 hover:cursor-pointer"
    >
      <h2 className="font-bold text-[40px] pt-5 line-clamp-1 text-center w-[90%] h-[120px]">
        {tripData.name}
      </h2>
      <div className="h-full w-[80%] flex flex-col items-start justify-start gap-3">
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3">
          <div className="w-[30%] h-fit text-right">
            <h3 className="font-medium text-[15px] text-headingBlue">
              People:
            </h3>
          </div>
          <div className="w-[70%] h-fit text-left">
            <h3 className="font-bold text-[15px] text-white">
              {tripData.people}
            </h3>
          </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3">
          <div className="w-[30%] h-fit text-right">
            <h3 className="font-medium text-[15px] text-headingBlue">
              Status:
            </h3>
          </div>
          <div className="w-[70%] h-fit text-left">
            <h3 className={`${status} font-bold text-[15px]`}>
              {tripData.status}
            </h3>
          </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3">
          <div className="w-[30%] h-fit text-right">
            <h3 className="font-medium text-[15px] text-headingBlue">
              Departure:
            </h3>
          </div>
          <div className="w-[70%] h-fit text-left">
            <h3 className="font-bold text-[15px] text-white">
              {tripData.departure}
            </h3>
          </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3">
          <div className="w-[30%] h-fit text-right">
            <h3 className="font-medium text-[15px] text-headingBlue">Area:</h3>
          </div>
          <div className="w-[70%] h-fit text-left">
            <h3 className="font-bold text-[15px] text-white">
              {tripData.area}
            </h3>
          </div>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-start gap-3">
          <div className="w-[30%] h-fit text-right">
            <h3 className="font-medium text-[15px] text-headingBlue">Role:</h3>
          </div>
          <div className="w-[70%] h-fit text-left">
            <h3 className="font-bold text-[15px] text-white">
              {tripData.role}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TripCard;
