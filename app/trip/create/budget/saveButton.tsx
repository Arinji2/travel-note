"use client";

import { Trip, UserTrip } from "@/utils/types";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

function SaveButon() {
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();
  const router = useRouter();
  const errorHandling = ({
    name,
    color,
    date,
    area,
  }: {
    name: string | null;
    color: string | null;
    date: string | null;
    area: string | null;
  }) => {
    if (name == null || color == null) router.push("/trip/create/name");
    else if (date == null || area == null) router.push("/trip/create/date");
  };
  return (
    <div className="w-[90%] h-full flex flex-row items-center justify-start gap-5">
      <h4
        className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500 md:ml-10 ml-5  hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
        onClick={async () => {
          setLoading(true);
          const budget = localStorage.getItem("tripBudget");
          const name = localStorage.getItem("tripName");
          const color = localStorage.getItem("tripColor");
          const date = localStorage.getItem("tripDate");
          const area = localStorage.getItem("tripArea");
          const hasBudget = localStorage.getItem("tripBudgetFlag");
          const id = Math.floor(100000 + Math.random() * 900000).toString();

          errorHandling({ name, color, date, area });
          const userTrip = {
            id: id,
            name: name as string,
            people: 1,
            status: "Planning",
            departure: date as string,
            area: area as string,
            role: "Owner",
          } as UserTrip;
          const trip = {
            id: id,
            name: name as string,
            color: color as string,
            owner: userId as string,
            hasBudget: hasBudget == "true" ? true : false,
            budget: budget as string,
            area: area as string,
            date: date as string,
          } as Trip;
          await fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/createUserTrip`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userTrip),
            }
          );
          await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/createTrip`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
          });

          router.push(`/dashboard`);
        }}
      >
        {loading ? (
          <FontAwesomeIcon
            icon={faSpinner as IconProp}
            spin={true}
            className="w-[30px] h-[30px] text-white"
          />
        ) : (
          "Create Trip"
        )}
      </h4>
    </div>
  );
}

export default SaveButon;
