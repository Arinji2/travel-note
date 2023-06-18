import { useSupabase } from "@/utils/hooks/useSupabase";
import { Spending } from "@/utils/types";
import { redirect } from "next/navigation";
import SpendingItem from "./spendingItem";
import React from "react";

export default async function Page({ params }: { params: { tripId: string } }) {
  const supabase = await useSupabase();

  const { data } = await supabase
    .from("spendings")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("tripId", params.tripId)
    .returns<Spending[]>();

  const colorData = await supabase
    .from("trips")
    .select("color")
    .eq("id", params.tripId);

  if (data === null) redirect("/dashboard");
  if (colorData === null) redirect("/dashboard");

  return (
    <div className="min-h-[100svh] h-fit w-full flex flex-col items-center justify-start gap-10 bg-background">
      <h1 className="text-[40px] md:text-[60px] font-black text-white pt-14 text-center">
        Manage Budget
      </h1>
      <div className="w-[95%] md:w-[90%] h-full flex flex-col items-center justify-start gap-4">
        {data.map((spending, index) => (
          <React.Fragment key={index}>
            <SpendingItem
              amount={spending.amount.toString()}
              color={colorData.data![0].color}
              id={index + 1}
              name={spending.name}
              tripId={params.tripId}
              index={spending.id}
            />
            {data.length - 1 !== index && (
              <div className="w-full h-fit flex flex-col items-center justify-center">
                <div className="w-[50%] h-[6px] bg-white"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
