"use client";

import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/dashboard">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="md:block hidden hover:cursor-pointer"
      />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={60}
        className="md:hidden hover:cursor-pointer block"
      />
    </Link>
  );
}

export default Logo;
