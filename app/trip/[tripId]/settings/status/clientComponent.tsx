"use client";

import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientComponent({
  tripId,
  status,
  color,
}: {
  tripId: string;
  status: string;
  color: string;
}) {
  const [clicked, setClicked] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-5">
      <div className="w-fit h-fit">
        <h1
          className="text-[40px] font-semibold text-[--color]"
          style={{ "--color": color } as React.CSSProperties}
        >
          Change to
        </h1>
        <div className="bg-white h-[4px] w-[90%]"></div>
      </div>
      <div className="w-full h-full flex flex-row items-start justify-start gap-5 flex-wrap">
        <Card
          clicked={clicked}
          setClicked={setClicked}
          name="Planning"
          color="#10B981"
          tripId={tripId}
          status={status}
        />
        <Card
          clicked={clicked}
          setClicked={setClicked}
          name="In Progress"
          color="#EAB308"
          tripId={tripId}
          status={status}
        />
        <Card
          clicked={clicked}
          setClicked={setClicked}
          name="Completed"
          color="#8B5CF6"
          tripId={tripId}
          status={status}
        />
      </div>
    </div>
  );
}

function Card({
  name,
  color,
  tripId,
  status,
  clicked,
  setClicked,
}: {
  name: string;
  color: string;
  tripId: string;
  status: string;
  clicked: string;
  setClicked: any;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div>
      {status !== name && (
        <h1
          className={`${
            clicked !== name && clicked !== ""
              ? " bg-gray-500 border-gray-500 "
              : ` bg-[${color}]   hover:cursor-pointer  border-[${color}]  hover:bg-white hover:text-[${color}] `
          }text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] transition-all ease-in-out duration-300 border-4`}
          onClick={async () => {
            if (clicked) return;
            setClicked(name);
            setLoading(true);

            await fetch("/api/changeStatus", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, tripId }),
            });

            setLoading(false);
            router.push(`/trip/${tripId}`);
          }}
        >
          {loading ? (
            <FontAwesomeIcon
              icon={faSpinner as IconProp}
              className="w-[30px] h-[30px]"
              spin={true}
            />
          ) : (
            name
          )}
        </h1>
      )}
    </div>
  );
}
