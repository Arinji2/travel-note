"use client";

import { Image as ImageType } from "@/utils/types";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

function Images({
  imageData,
  setSelected,
  selected,
}: {
  imageData: ImageType;
  selected: ImageType[];
  setSelected: React.Dispatch<React.SetStateAction<ImageType[]>>;
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="w-[90vw] md:w-[400px] h-[250px] md:h-[400px] rounded-lg relative overflow-hidden bg-[#1E1E1E] group shrink-0 flex flex-col items-center justify-end hover:cursor-pointer line-clamp-1"
      onClick={() => {
        if (clicked) {
          const newSelected = selected.filter(
            (image) => image.id != imageData.id
          );
          setSelected(newSelected);
          setClicked(false);
        } else {
          setSelected([...selected, imageData]);
          setClicked(true);
        }
      }}
    >
      <FontAwesomeIcon
        icon={faCheckCircle as IconProp}
        className={`${
          clicked ? "opacity-100 " : "opacity-0 "
        }transition-all ease-in-out duration-300 absolute left-0 top-0 w-[40px] h-[40px] text-green-400 z-50`}
      />
      <Image
        src={imageData.link}
        alt={imageData.name}
        fill
        quality={100}
        loading="lazy"
        className="object-cover absolute group-hover:scale-125 transition-all ease-in-out duration-700"
      ></Image>
      <div className="absolute z-10 w-full h-full bg-background opacity-0 group-hover:opacity-60 transition-all ease-in-out duration-700"></div>
      <div className="w-[80%] h-fit line-clamp-1  z-20 mr-7 mb-5">
        <h1 className="text-white font-bold text-[25px]  z-20 opacity-0 group-hover:opacity-100 duration-700">
          {imageData.name}
        </h1>
      </div>
    </div>
  );
}

export default Images;
