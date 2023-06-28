export const dynamic = "force-dynamic";

import { useSupabase } from "@/utils/hooks/useSupabase";
import { redirect } from "next/navigation";
import type { Spending, Trip } from "@/utils/types";
import React from "react";
import SpendingItemWithInfo from "../spendingItemWithInfo";
import SpendingItem from "../spendingItem";
import { sortCategory, sortGroup } from "../utils";
import RedirectButton from "./redirectButton";

import ChartComponent from "./spendingGraph";

export default async function BudgetViewPage({
  params,
}: {
  params: { tripId: string };
}) {
  const { tripId } = params;
  const supabase = await useSupabase();

  const Recents = await supabase
    .from("spendings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)
    .eq("tripId", tripId)
    .returns<Spending[]>();
  const Largest = await supabase
    .from("spendings")
    .select("*")
    .order("amount", { ascending: false })
    .limit(5)
    .eq("tripId", tripId)
    .returns<Spending[]>();
  const TripData = await supabase
    .from("trips")
    .select("*")
    .eq("id", tripId)
    .returns<Trip[]>();

  const SpendingData = await supabase
    .from("spendings")
    .select("*")
    .eq("tripId", tripId)
    .order("created_at", { ascending: true })
    .returns<Spending[]>();

  if (
    TripData.data === null ||
    Recents.data === null ||
    Largest.data === null ||
    SpendingData.data === null
  )
    redirect("/dashboard");

  const categories = sortCategory({ spendingData: SpendingData.data });
  const groups = sortGroup({ spendingData: SpendingData.data });
  const totalSpending = SpendingData.data.reduce((a, b) => a + b.amount, 0);

  let dates = SpendingData.data.map((spending) => spending.created_at);

  dates = dates.map((date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}`;
  });

  let spendings = SpendingData.data.map((spending) => spending.amount);

  return (
    <div className="w-full h-fit min-h-[100svh] flex flex-col items-center justify-start bg-background">
      <div className="w-full h-[160px] sticky top-32 flex flex-row items-center justify-evenly bg-background">
        <div
          className={`w-fit h-fit flex flex-col items-center justify-center gap-3 ${
            TripData.data[0].hasBudget ? " block " : " hidden "
          }`}
        >
          <h2 className="text-[20px] md:text-[30px] font-bold text-white">
            Trip Budget
          </h2>
          <h2
            className={`text-[30px] md:text-[50px] font-bold text-[--color]`}
            style={{ "--color": TripData.data[0].color } as React.CSSProperties}
          >
            ${TripData.data[0].budget}
          </h2>
        </div>
        <div
          className={`w-fit h-fit flex flex-col items-center justify-center gap-3`}
        >
          <h2 className="text-[20px] md:text-[30px] font-bold text-white">
            Trip Spending
          </h2>
          <h2
            className={`text-[30px] md:text-[50px] font-bold text-[--color]`}
            style={{ "--color": TripData.data[0].color } as React.CSSProperties}
          >
            ${totalSpending}
          </h2>
        </div>
      </div>
      {Recents.data.length !== 0 ? (
        <React.Fragment>
          <div className="bg-[#1E1E1E] rounded-lg w-[95vw] md:w-[90vw] h-fit flex flex-col items-start justify-start gap-5 p-3 mb-10">
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-1 md:ml-5">
              <h1 className="text-white text-[20px] md:text-[40px] font-bold ">
                Recent Spending&apos;s
              </h1>
              <div
                className="w-full bg-[--color] h-[5px]"
                style={
                  { "--color": TripData.data[0].color } as React.CSSProperties
                }
              ></div>
            </div>

            {Recents.data.map((spending, index: number) => (
              <React.Fragment key={index}>
                <SpendingItemWithInfo
                  id={index + 1}
                  amount={spending.amount.toString()}
                  name={spending.name}
                  tripId={tripId}
                  color={TripData.data[0].color}
                  index={spending.id}
                />
                {Recents.data.length - 1 !== index && (
                  <div className="w-full h-fit flex flex-col items-center justify-center">
                    <div className="w-[50%] h-[6px] bg-white"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="bg-[#1E1E1E] rounded-lg w-[95vw] md:w-[90vw] h-fit flex flex-col items-start justify-start gap-5 p-3 mb-10">
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-1 md:ml-5">
              <h1 className="text-white text-[20px] md:text-[40px] font-bold ">
                Largest Spending&apos;s
              </h1>
              <div
                className="w-full bg-[--color] h-[5px]"
                style={
                  { "--color": TripData.data[0].color } as React.CSSProperties
                }
              ></div>
            </div>

            {Largest.data.map((spending, index: number) => (
              <React.Fragment key={index}>
                <SpendingItemWithInfo
                  id={index + 1}
                  amount={spending.amount.toString()}
                  tripId={tripId}
                  name={spending.name}
                  color={TripData.data[0].color}
                  index={spending.id}
                />
                {Largest.data.length - 1 !== index && (
                  <div className="w-full h-fit flex flex-col items-center justify-center">
                    <div className="w-[50%] h-[6px] bg-white"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="bg-[#1E1E1E] rounded-lg w-[95vw] md:w-[90vw] h-fit flex flex-col items-start justify-start gap-5 p-3 mb-10">
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-1 md:ml-5">
              <h1 className="text-white text-[20px] md:text-[40px] font-bold ">
                Category Spending&apos;s
              </h1>
              <div
                className="w-full bg-[--color] h-[5px]"
                style={
                  { "--color": TripData.data[0].color } as React.CSSProperties
                }
              ></div>
            </div>

            {categories.map((spending, index: number) => (
              <React.Fragment key={index}>
                <SpendingItem
                  id={index + 1}
                  amount={spending.total}
                  name={spending.name}
                  color={TripData.data[0].color}
                />
                {categories.length - 1 !== index && (
                  <div className="w-full h-fit flex flex-col items-center justify-center">
                    <div className="w-[50%] h-[6px] bg-white"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-[#1E1E1E] rounded-lg w-[95vw] md:w-[90vw] h-fit flex flex-col items-start justify-start gap-5 p-3 mb-10">
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-1 md:ml-5">
              <h1 className="text-white text-[20px] md:text-[40px] font-bold ">
                Group Spending&apos;s
              </h1>
              <div
                className="w-full bg-[--color] h-[5px]"
                style={
                  { "--color": TripData.data[0].color } as React.CSSProperties
                }
              ></div>
            </div>

            {groups.map((spending, index: number) => (
              <React.Fragment key={index}>
                <SpendingItem
                  id={index + 1}
                  amount={spending.total}
                  name={spending.name}
                  color={TripData.data[0].color}
                />
                {groups.length - 1 !== index && (
                  <div className="w-full h-fit flex flex-col items-center justify-center">
                    <div className="w-[50%] h-[6px] bg-white"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="w-full max-h-[70svh] h-fit mb-10 mt-10 flex flex-col items-center justify-center">
            <ChartComponent dates={dates} spendings={spendings} />
          </div>
          <div className="pb-10">
            <RedirectButton tripId={tripId} />
          </div>
        </React.Fragment>
      ) : (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-5">
          <h1 className="text-white text-[20px] md:text-[40px] font-bold ">
            No Spending Data Available
          </h1>
          <RedirectButton tripId={tripId} />
        </div>
      )}
    </div>
  );
}
