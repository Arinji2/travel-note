"use client";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import * as React from "react";

function SpendingItemWithInfo({
  id,
  index,
  name,
  amount,

  tripId,
  color,
}: {
  id: number;
  index: string;
  name: string;
  amount: string;

  tripId: string;
  color: string;
}) {
  const router = useRouter();

  return (
    <div className="w-full h-fit flex flex-row items-center justify-center ">
      <div className="w-[10%] h-[50px] flex flex-row items-center justify-center">
        <h2 className="text-[15px] md:text-[30px] font-bold text-white ">
          {id}.
        </h2>
      </div>
      <div className="w-[60%] md:w-[50%] h-[50px] flex flex-col items-start justify-center line-clamp-1 ">
        <h2 className="text-[15px] md:text-[30px] font-bold text-white">
          {name}
        </h2>
      </div>
      <div className="w-[20%] h-[50px] flex flex-row items-center justify-center ">
        <h2
          className="text-[15px] md:text-[30px] font-bold text-[--color]"
          style={{ "--color": color } as React.CSSProperties}
        >
          ${amount}
        </h2>
      </div>
      <div className="w-[10%] h-[50px] flex flex-row items-center justify-center ">
        <FontAwesomeIcon
          icon={faInfoCircle as IconProp}
          className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] text-white hover:cursor-pointer hover:text-[--color] transition-all ease-in-out duration-300"
          style={{ "--color": color } as React.CSSProperties}
          onClick={() =>
            router.push(`/trip/${tripId}/budget/spending/${index}`)
          }
        />
      </div>
    </div>
  );
}

export default SpendingItemWithInfo;
