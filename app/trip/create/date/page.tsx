import Image from "next/image";
import DateComponent from "./date";
import AreaInput from "./area";
import SaveButon from "./saveButton";

export default async function CreatePage() {
  return (
    <div className="w-full  flex flex-col items-center justify-start bg-[#3F3D56] h-[160svh] md:h-[100svh] pb-5">
      <h1 className="text-text font-black text-[50px] md:text-[60px] pt-10">
        Details
      </h1>
      <div className="h-[50svh] w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-[60%] h-full flex flex-col items-start justify-start  pl-3 md:pl-10 gap-10 pt-10">
          <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
            <h4 className="text-white text-[20px] font-bold">
              1. Set a <span className="text-headingRed">Departure Date</span>
            </h4>
            <DateComponent />
          </div>
          <AreaInput />
          <SaveButon />
        </div>
        <div className="w-[40%] h-full flex-col items-center justify-center relative md:flex hidden">
          <Image
            src="/rocket.svg"
            alt="rocket"
            fill
            className="object-fit"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
