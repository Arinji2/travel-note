"use client";

import { useRouter } from "next/navigation";

function RedirectButton() {
  const router = useRouter();
  return (
    <p
      onClick={() => router.back()}
      className="p-4 pl-6 pr-6 rounded-[5px] shadow-md shadow-black bg-[#2c2b2b] text-white text-[20px] hover:shadow-lg hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-300 hover:shadow-black"
    >
      Go Back
    </p>
  );
}

export default RedirectButton;
