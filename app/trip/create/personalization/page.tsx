import Image from "next/image";

import NameInput from "./name";
import ColorInput from "./color";
import SaveButon from "./saveButton";

export default async function CreatePage() {
  return (
    <div className="w-full  flex flex-col items-center justify-start bg-[#3F3D56] h-fit md:h-[calc(100svh-120px)] pb-5">
      <h1 className="text-text font-black text-[50px] md:text-[60px] pt-10">
        Personalization
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-[60%] h-full flex flex-col items-center justify-center md:pt-0 pt-10 md:gap-0 gap-20">
          <NameInput />
          <ColorInput />
          <SaveButon />
        </div>
        <div className="w-[40%] h-full flex-col items-center justify-center relative md:flex hidden">
          <Image
            src="/personal.svg"
            alt="personal"
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
