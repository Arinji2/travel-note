import Image from "next/image";

import BudgetGroup from "./budget";

export default async function CreatePage() {
  return (
    <div className="w-full  flex flex-col items-center justify-start bg-[#3F3D56] h-fit md:h-[calc(100svh-120px)] pb-5">
      <h1 className="text-text font-black text-[50px] md:text-[60px] pt-10">
        Budget
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
        <BudgetGroup />

        <div className="w-[40%] h-full flex-col items-center justify-center relative md:flex hidden">
          <Image
            src="/vault.svg"
            alt="vault"
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
