import { useSupabase } from "@/utils/hooks/useSupabase";
import { Trip } from "@/utils/types";
import { redirect } from "next/navigation";
import { getColor } from "../../budget/utils";
import ClientComponent from "./clientComponent";

export default async function Page({ params }: { params: { tripId: string } }) {
  const supabase = await useSupabase();
  const tripData = await supabase
    .from("trips")
    .select("*")
    .eq("id", params.tripId)
    .returns<Trip[]>()
    .single();

  if (tripData.data === null) redirect("/dashboard");

  const color = getColor(tripData.data);

  return (
    <div className="w-full h-[calc(100svh-120px)] bg-background flex flex-col items-center justify-start">
      <h1 className="text-white text-[30px] md:text-[60px] font-black mt-10">
        Trip Status
      </h1>
      <div className="w-[80vw] mt-10 h-fit bg-[#1E1E1E] p-3 flex flex-col items-start justify-start gap-10 pl-10 rounded-lg">
        <h2 className="text-white font-bold text-[25px] md:text-[40px] mt-10">
          Current Status:{" "}
          <span
            style={{ "--color": color } as React.CSSProperties}
            className="text-[--color]"
          >
            {tripData.data.status}
          </span>
        </h2>
        <ClientComponent
          status={tripData.data.status}
          tripId={params.tripId}
          color={color}
        />
      </div>
    </div>
  );
}
