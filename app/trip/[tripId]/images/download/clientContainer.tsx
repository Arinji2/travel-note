"use client";
import * as React from "react";
import UserDropdown from "./userDropDown";
import DayInput from "./dayInput";
import FetchButton from "./fetchButton";
import { Image } from "@/utils/types";
import ImageContainer from "./ImagesContainer";

export default function ClientContainer({
  data,
  children,
}: {
  data: {
    users: string[];
    day: string;
    user: string;

    tripId: string;
    color: string;
  };
  children: React.ReactNode;
}) {
  const [userIndex, setUserIndex] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [imageData, setImageData] = React.useState({} as Image[]);
  const [error, setError] = React.useState(false);
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 w-full h-fit">
      <div className="pt-10 flex flex-col items-center justify-center gap-5 w-[90vw] bg-[#1E1E1E] md:w-[80vw] rounded-lg pb-5">
        <UserDropdown
          color={data.color}
          users={data.users}
          index={userIndex}
          setIndex={setUserIndex}
        />

        <DayInput setDay={setDay} />
        <FetchButton
          userName={data.users[userIndex]}
          day={day}
          setImageData={setImageData}
          setError={setError}
        />
      </div>
      <ImageContainer error={error} imageData={imageData} />

      {children}
    </div>
  );
}
