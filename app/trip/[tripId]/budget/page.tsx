import { Trip } from "@/utils/types";
import QuickActionSection from "../quickActionSection";
import {
  faCartPlus,
  faEye,
  faTasks,
} from "@fortawesome/fontawesome-free-solid";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { tripId: string } }) {
  const supabase = await useSupabase();
  const { tripId } = params;
  const { data } = await supabase
    .from("trips")
    .select("color")
    .eq("id", tripId)
    .returns<Trip[]>();
  if (data === null) redirect("/dashboard");

  return (
    <div className="bg-background w-full h-[calc(100svh-120px)] flex flex-col items-center justify-center">
      <QuickActionSection
        sectionName={"Budget"}
        color={data[0].color}
        actions={[
          {
            iconLink: faEye,
            link: `/trip/${tripId}/budget/view`,
            name: "View",
          },
          {
            iconLink: faTasks,
            link: `/trip/${tripId}/budget/manage`,
            name: "Manage",
          },
          {
            iconLink: faCartPlus,
            link: `/trip/${tripId}/budget/add`,
            name: "Add",
          },
        ]}
      />
    </div>
  );
}
