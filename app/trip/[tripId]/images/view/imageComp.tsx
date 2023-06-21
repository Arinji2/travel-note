"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";

function ImageComp({
  link,
  name,
  height,
  width,
  tripId,
  id,
}: {
  link: string;
  name: string;
  height: string;
  width: string;
  tripId: string;
  id: string;
}) {
  const [computedHeight, setComputedHeight] = useState("0px");
  const [computedWidth, setComputedWidth] = useState("0px");

  useEffect(() => {
    const ratio = parseInt(height) / parseInt(width);
    const newWidth = 300;
    const newHeight = newWidth * ratio;
    setComputedHeight(newHeight > 300 ? newHeight.toString() + "px" : "300px");
    setComputedWidth(newWidth.toString() + "px");
  }, []);
  return (
    <Link
      href={`/trip/${tripId}/images/image/${id}`}
      className="w-fit h-fit shrink-0"
    >
      <div
        className="relative rounded-lg overflow-hidden group flex flex-col items-start justify-end hover:cursor-pointer"
        style={{
          height: computedHeight,
          width: window.innerWidth > 768 ? computedWidth : "95vw",
        }}
      >
        <Image
          src={link}
          alt={name}
          className="w-fit absolute h-fit object-cover  transition-all ease-in-out duration-700 group-hover:scale-125"
          fill
          quality={100}
        />
        <div
          className={`absolute group-hover:opacity-70 opacity-0 transition-all ease-in-out duration-700 w-full h-full bg-[#1E1E1E]`}
        ></div>
        <h1 className="group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-700 text-white text-3xl line-clamp-2 ml-10 mr-10 z-10 pb-5">
          {name}
        </h1>
      </div>
    </Link>
  );
}

export default ImageComp;
