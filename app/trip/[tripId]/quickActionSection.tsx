"use client";

import { IconDefinition } from "@fortawesome/fontawesome-free-solid";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

function QuickActionSection({
  sectionName,
  actions,
  color,
}: {
  sectionName: string;
  actions: { iconLink: IconDefinition; link: string; name: string }[];
  color: string;
}) {
  const [userColor, setUserColor] = useState<string>("");

  useEffect(() => {
    if (color === "yellow") setUserColor("yellow-500");
    else if (color === "green") setUserColor("green-500");
    else if (color === "violet") setUserColor("violet-500");
  }, [color]);

  return (
    <div className="w-[90vw] h-[400px] md:h-[300px] bg-[#2F2E41] rounded-[10px] md:w-[40vw] flex flex-col items-center justify-start gap-5">
      <h2 className="pt-5 text-[40px] font-bold text-white">{sectionName}</h2>
      <div className="w-full h-full flex flex-row items-center justify-center gap-8 flex-wrap">
        {actions.map((action) => (
          <QuicActionCard
            actions={action}
            key={action.name}
            color={userColor}
          />
        ))}
      </div>
    </div>
  );
}

function QuicActionCard({
  actions,
  color,
}: {
  actions: { iconLink: IconDefinition; link: string; name: string };
  color: string;
}) {
  return (
    <Link
      href={actions.link}
      className="h-fit w-fit flex flex-col items-center justify-center shrink-0 gap-2 group"
    >
      <div
        className={`w-[120px] h-[70px]  md:w-[170px] md:h-[100px] bg-background group-hover:bg-${color} rounded-[5px] flex flex-col items-center justify-center`}
      >
        <FontAwesomeIcon
          icon={actions.iconLink as IconProp}
          className={`text-${color} w-[35px] md:w-[50px] h-[35px] md:h-[50px] group-hover:text-background transition-all ease-in-out duration-700`}
        />
      </div>
      <p className="text-white font-black text-[15px] md:text-[30px]">
        {actions.name}
      </p>
    </Link>
  );
}

export default QuickActionSection;
