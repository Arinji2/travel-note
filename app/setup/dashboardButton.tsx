"use client";
import Link from "next/link";

function RedirectButton() {
  return (
    <Link
      href="/dashboard"
      className="px-10 p-3 pl-6 pr-6 font-black border border-b-4 border-l-4 border-black rounded-lg shadow-lg text-[30px] text-background bg-headingBlue hover:cursor-pointer  hover:text-headingBlue hover:bg-background transition-all ease-in-out duration-300"
    >
      To Dashboard
    </Link>
  );
}

export default RedirectButton;
