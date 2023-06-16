import { useSupabase } from "@/utils/hooks/useSupabase";
import { Spending } from "@/utils/types";
import { redirect } from "next/navigation";

import * as React from "react";
import RedirectButton from "./redirectButton";

export default async function Spending({
  params,
}: {
  params: { tripId: string; index: string };
}) {
  const supabase = await useSupabase();
  let spendingData = {} as Spending;
  const { tripId, index } = params;
  const { data } = await supabase.from("spendings").select("*").eq("id", index);
  if (data === null) redirect("/dashboard");
  spendingData = data[0] as Spending;
  const name = await supabase
    .from("users")
    .select("username")
    .eq("id", spendingData.creatorId);
  if (name.data === null) redirect("/dashboard");
  spendingData.payerId = name.data[0].username;

  let color = await supabase.from("trips").select("color").eq("id", tripId);
  if (color.data === null) redirect("/dashboard");
  color = color.data[0].color;
  return (
    <div className="w-full h-fit min-h-[calc(100svh-120px)] bg-background flex flex-col items-center justify-start pb-5 gap-5">
      <div className="md:w-[70%]  w-[95%] h-full flex flex-col items-center md:items-start justify-center pt-10 md:pt-20 gap-10">
        <h1 className="text-[30px] md:text-[60px] font-black text-white line-clamp-1">
          {spendingData.name}
        </h1>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10 flex-wrap line-clamp-2 break-words">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] "
            style={{ "--color": color } as React.CSSProperties}
          >
            Description:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white ">
            {spendingData.description}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] line-clamp-2"
            style={{ "--color": color } as React.CSSProperties}
          >
            Amount:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white line-clamp-2">
            ${spendingData.amount}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] line-clamp-2"
            style={{ "--color": color } as React.CSSProperties}
          >
            Category:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white line-clamp-2">
            {spendingData.category}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] line-clamp-2"
            style={{ "--color": color } as React.CSSProperties}
          >
            Date:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white line-clamp-2">
            {spendingData.created_at}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] line-clamp-2"
            style={{ "--color": color } as React.CSSProperties}
          >
            Paid By:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white line-clamp-2">
            {spendingData.payerId}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-fit gap-2 md:ml-10">
          <h2
            className=" text-[15px] md:text-[30px] font-bold text-[--color] line-clamp-2"
            style={{ "--color": color } as React.CSSProperties}
          >
            Group:
          </h2>
          <h2 className=" text-[15px] md:text-[30px] font-bold text-white line-clamp-2">
            {spendingData.group}
          </h2>
        </div>
      </div>
      <RedirectButton />
    </div>
  );
}
