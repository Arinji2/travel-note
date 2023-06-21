"use client";

import { Image as ImageType } from "@/utils/types";
import Image from "next/image";

function ImageComp({
  imageProps,
  width,
  height,
}: {
  imageProps: ImageType;
  width: number;
  height: number;
}) {
  return (
    <Image
      alt={imageProps.name}
      src={imageProps.link}
      width={width >= window.innerWidth ? window.innerWidth * 0.8 : width}
      height={width >= window.innerWidth ? height * 0.8 : height}
      quality={100}
      className="rounded-lg"
    />
  );
}

export default ImageComp;
