"use client";

import { getUserIdClient } from "@/utils/func";
import { Image } from "@/utils/types";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useState } from "react";

export default function FetchButton({
  userName,
  day,
  setImageData,
  setError,
}: {
  userName: string;
  day: number;
  setImageData: React.Dispatch<React.SetStateAction<Image[]>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <h1
      className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500   hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
      onClick={async () => {
        setLoading(true);

        const data = await fetch("/api/getImages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            day: day.toString(),
            user: userName,
          }),
        });

        if (data.status === 404) setError(true);
        else {
          const resp = await data.json();
          setImageData(resp.data);
          setError(false);
        }
        setLoading(false);
      }}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faSpinner as IconProp}
          spin={true}
          className="text-6xl w-[30px] h-[30px] text-white"
        />
      ) : (
        "Get Images"
      )}
    </h1>
  );
}
