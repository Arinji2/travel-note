"use client";
import Image from "next/image";
import Link from "next/link";

function CTA() {
  return (
    <div className="w-full h-[100svh] flex flex-col items-center justify-center bg-background z-30 sticky top-0 md:gap-20 gap-10">
      <div className="absolute w-[90vw] h-[500px]">
        <Image
          src="/world.svg"
          alt="World"
          fill
          quality={100}
          className="md:object-fit"
        />
      </div>
      <div className="absolute w-full h-full bg-[#1E1E1E] opacity-70"></div>
      <h3 className="text-[40px] font-black text-headingRed md:text-[80px] z-30 text-center">
        What are you waiting for?
      </h3>
      <Link
        href="/signup"
        className="px-10 p-3 pl-6 pr-6 font-black border border-b-4 border-l-4 border-black rounded-lg shadow-lg text-[15px] md:text-[30px] text-headingBlue bg-background hover:cursor-pointer  hover:text-background hover:bg-headingBlue transition-all ease-in-out duration-300 z-30"
      >
        Start Traveling
      </Link>
    </div>
  );
}

export default CTA;
