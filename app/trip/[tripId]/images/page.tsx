import { Trip } from "@/utils/types";
import QuickActionSection from "../quickActionSection";
import { faDownload, faEye, faPlus } from "@fortawesome/fontawesome-free-solid";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export default async function Page({ params }: { params: { tripId: string } }) {
  const user = await currentUser();
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
        sectionName={"Images"}
        color={data[0].color}
        actions={[
          {
            iconLink: faEye,
            link: `/trip/${tripId}/images/view?user=${user!.username}&day=1`,
            name: "View",
          },
          {
            iconLink: faDownload,
            link: `/trip/${tripId}/images/download`,
            name: "Download",
          },
          {
            iconLink: faPlus,
            link: `/trip/${tripId}/images/upload`,
            name: "Add",
          },
        ]}
      />
    </div>
  );
}
