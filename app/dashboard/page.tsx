import { useSupabase } from "@/utils/hooks/useSupabase";
import { Trip, UserTrip } from "@/utils/types";
import { auth } from "@clerk/nextjs";

import CreateTrip from "./createTrip";
import TripCard from "./tripCard";

export default async function Dashboard() {
  const supabase = await useSupabase();
  const { userId } = auth();
  const { data } = await supabase.from("users").select("*").eq("id", userId);
  let trips: UserTrip[] = [];
  let tripData: Trip[] = [];

  if (data != null) trips = data[0].trips as UserTrip[];

  await Promise.all(
    trips.map(async (trip) => {
      const { data } = await supabase
        .from("trips")
        .select("*")
        .eq("id", trip.id)
        .single();
      if (data != null) tripData.push(data);
    })
  );

  return (
    <div className="w-full h-fit min-h-[calc(100svh-120px)] bg-background flex flex-col items-center justify-start">
      <div className="w-[80vw] flex flex-col items-center md:items-start justify-center h-fit mt-20">
        <h1 className="text-[60px] font-black text-headingRed">Trips:</h1>
      </div>

      <div className="md:w-[80%] w-[90%] h-fit flex flex-row items-center justify-start flex-wrap pt-5 gap-5">
        <CreateTrip />
        {trips.map((trip, i) => (
          <TripCard
            tripData={trip}
            key={trip.id}
            tripStatus={tripData[i].status}
          />
        ))}
      </div>
    </div>
  );
}
