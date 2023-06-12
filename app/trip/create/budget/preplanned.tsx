"use client";

import { Dispatch, SetStateAction, useState } from "react";

function SetBudget({
  budget,
  setBudget,
}: {
  budget: boolean;
  setBudget: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-[90%] h-full flex flex-col items-start justify-center gap-5">
      <h4 className="text-white text-[20px] font-bold">
        1. Do you have a{" "}
        <span className="text-headingBlue">Pre Planned Budget</span>
      </h4>
      <div className="w-full h-fit flex flex-row items-center justify-start flex-wrap gap-3">
        <p
          className={`${
            budget ? "shadow-lg shadow-black " : ""
          }text-white text-[20px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-green-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black`}
          onClick={() => {
            setBudget(true);
            localStorage.setItem("tripBudgetFlag", "true");
          }}
        >
          Yes
        </p>
        <p
          className={`${
            !budget ? "shadow-lg shadow-black " : ""
          }text-white text-[20px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-red-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-black`}
          onClick={() => {
            setBudget(false);
            localStorage.setItem("tripBudgetFlag", "false");
          }}
        >
          No
        </p>
      </div>
    </div>
  );
}

export default SetBudget;
