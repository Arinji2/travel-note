"use client";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full h-[100svh] bg-background flex flex-col items-center md:items-start justify-start">
      <div className="w-full md:w-[60vw]  h-[30%] flex flex-col items-start justify-center text-left mt-10 pl-5 md:ml-10">
        <h1 className="text-[50px] md:text-[70px] font-black text-headingRed leading-[1]">
          Handling your <span className="text-headingBlue">Travel Stress</span>,
          so you don&apos;t have to.
        </h1>
      </div>
      <div className="h-[60%] w-full flex flex-row items-center justify-center">
        <div className="md:flex hidden w-[40%] h-[80%] flex-row items-center justify-evenly ">
          <div className="w-[156px] h-[237px] bg-[#2C5E5D] px-5 py-2 font-medium border border-b-4 border-l-4 border-black rounded-lg shadow-lg flex flex-col items-center justify-start">
            <div className="w-full h-[80%] flex flex-col items-center justify-center">
              <Image
                src="/savings.svg"
                alt="Saving"
                width={120}
                height={160}
                quality={100}
              />
            </div>
            <p className="font-black text-text text-[30px]">Budget</p>
          </div>
          <div className="w-[156px] h-[237px] bg-[#2C5E5D] px-5 py-2 font-medium border border-b-4 border-l-4 border-black rounded-lg shadow-lg flex flex-col items-center justify-start">
            <div className="w-full h-[80%] flex flex-col items-center justify-center">
              <Image
                src="/selfie.svg"
                alt="Selfie"
                width={120}
                height={160}
                quality={100}
              />
            </div>
            <p className="font-black text-text text-[30px]">Photos</p>
          </div>
        </div>
        <div className="flex w-full md:w-[60%] h-full flex-row items-center justify-evenly">
          <div className="w-[90vw] md:w-[509px] h-[289px] relative">
            <Image
              src="/adventure.svg"
              alt="Adventure"
              fill
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="h-[20%] md:w-[40vw] w-full flex flex-col items-center justify-start md:justify-center ">
        <Link
          href="/signup"
          className="px-10 p-3 pl-6 pr-6 font-black border border-b-4 border-l-4 border-black rounded-lg shadow-lg text-[30px] text-background bg-headingBlue hover:cursor-pointer  hover:text-headingBlue hover:bg-background transition-all ease-in-out duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;
