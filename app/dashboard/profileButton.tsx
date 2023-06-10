"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Profile() {
  return (
    <Link href="/dashboard/profile">
      <FontAwesomeIcon
        icon={faUser as IconProp}
        className="h-[40px] md:w-[50px] w-[40px] md:h-[50px] text-text hover:cursor-pointer"
      />
    </Link>
  );
}

export default Profile;
