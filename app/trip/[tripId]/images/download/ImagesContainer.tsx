"use client";
import { Image } from "@/utils/types";
import * as React from "react";
import Images from "./images";
import ImageButton from "./imageButton";

export default function ImageContainer({
  imageData,
  error,
}: {
  imageData: Image[];
  error: boolean;
}) {
  const [selected, setSelected] = React.useState([] as Image[]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-fit gap-6 ">
      {error ? (
        <h1 className="text-white text-[40px] font-black">No Images!!</h1>
      ) : (
        <></>
      )}
      <div className="flex flex-row items-center justify-center gap-6 flex-wrap w-full h-full">
        {imageData.length > 0 && !error ? (
          imageData.map((image) => (
            <Images
              imageData={image}
              key={image.id}
              selected={selected}
              setSelected={setSelected}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <ImageButton selected={selected} />
    </div>
  );
}
