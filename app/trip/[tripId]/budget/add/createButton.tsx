"use client";

import { Spending, Trip, UserTrip } from "@/utils/types";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

function CreateButton({ tripId }: { tripId: string }) {
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();
  const router = useRouter();

  return (
    <div className="w-[90%] h-full flex flex-row items-center justify-start gap-5">
      <h4
        className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500 md:ml-10 ml-5  hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
        onClick={async () => {
          setLoading(true);
          const name = localStorage.getItem("spendingName");
          if (name === null) {
            setLoading(false);
            console.log("name");
            return;
          }
          const amount = localStorage.getItem("spendingAmount");
          if (amount === null) {
            setLoading(false);
            return;
          }
          const desc = localStorage.getItem("spendingDesc");
          const group = localStorage.getItem("spendingGroup");
          const category = localStorage.getItem("spendingCategory");
          if (category === null) {
            setLoading(false);
            return;
          }
          const dateNow = new Date().getTime();
          //format date to yyyy-mm-dd
          const formatDate = new Date(dateNow);
          const year = formatDate.getFullYear();
          const month = (formatDate.getMonth() + 1).toString().padStart(2, "0");
          const day = formatDate.getDate().toString().padStart(2, "0");
          const date = `${year}-${month}-${day}`;

          const spending = {
            name: name,
            amount: parseFloat(amount),
            description: desc === null ? "" : desc,
            group: group === null ? "Default" : group,
            tripId: tripId,
            category: category,
            created_at: date,
            creatorId: userId,
            id: Math.floor(100000 + Math.random() * 900000).toString(),
          } as Spending;

          await fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/createSpending`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(spending),
            }
          );

          router.push(`/trip/${tripId}`);
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

export default CreateButton;
