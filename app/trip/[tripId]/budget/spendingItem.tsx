"use client";

import * as React from "react";

function SpendingItem({
  id,

  name,
  amount,

  color,
}: {
  id: number;

  name: string;
  amount: string;

  color: string;
}) {
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
      <div className="w-[10%] h-[50px] flex flex-row items-center justify-center "></div>
    </div>
  );
}

export default SpendingItem;
