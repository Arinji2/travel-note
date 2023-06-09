import Image from "next/image";

function Free() {
  return (
    <div className="w-full h-fit md:h-[100svh] sticky top-0 flex flex-col items-center justify-center md:gap-20 gap-5 z-0">
      <h3 className="font-black text-[40px] text-headingRed md:text-[80px] text-center m-3">
        And Much More, For Free
      </h3>
      <div className="w-full h-[400px] relative">
        <Image src="/aircraft.svg" alt="Aircraft" fill quality={100} />
      </div>
    </div>
  );
}

export default Free;
