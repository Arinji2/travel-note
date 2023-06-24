"use client";

import { Image } from "@/utils/types";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ImageButton({ selected }: { selected: Image[] }) {
  const [loading, setLoading] = useState(false);
  return (
    <h1
      className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500   hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
      onClick={async () => {
        if (selected.length === 0) return;
        setLoading(true);

        const response = await fetch("/api/downloadImages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selected),
        });

        const { data } = await response.json();
        const zipData = Uint8Array.from(atob(data.zipBase64), (c) =>
          c.charCodeAt(0)
        ); // Convert base64 to Uint8Array
        const zipBlob = new Blob([zipData], { type: "application/zip" });

        const url = URL.createObjectURL(zipBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = data.zipName;
        link.click();

        setLoading(false);
      }}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faSpinner as IconProp}
          spin={true}
          className="text-6xl w-[30px] h-[30px] text-white"
        />
      ) : selected.length > 0 ? (
        "Download Images"
      ) : (
        "Select Images"
      )}
    </h1>
  );
}
