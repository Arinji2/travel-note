import { useSupabase } from "@/utils/hooks/useSupabase";
import { Trip } from "@/utils/types";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import QuickActionSection from "./quickActionSection";
import {
  faCartPlus,
  faTasks,
  faEye,
  faDownload,
  faPlus,
  IconDefinition,
  faUserEdit,
  faEdit,
  faUpload,
} from "@fortawesome/fontawesome-free-solid";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export default async function Page({ params }: { params: { tripId: string } }) {
  const { tripId } = params;
  const { userId } = auth();
  const supabase = await useSupabase();
  const { data } = await supabase.from("trips").select("*").eq("id", tripId);
  if (data === null) redirect("/trip");
  if (userId === null) redirect("/signin");
  const tripData = data[0] as Trip;
  if (tripData.people.includes(userId) === false) redirect("/trip");

  return (
    <div className="w-full h-fit min-h-[100svh] bg-background flex flex-col items-center justify-start">
      <div className="w-[90%] h-fit flex flex-col items-center justify-center pt-20">
        <h1 className="text-[60px] font-black text-white line-clamp-1">
          {tripData.name}
        </h1>

        <div className="h-full w-full flex flex-row items-center justify-center gap-x-10 md:gap-y-10 gap-y-20 flex-wrap mt-10 pb-10">
          <QuickActionSection
            sectionName={"Budget"}
            color={tripData.color}
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
          <QuickActionSection
            sectionName={"Photos"}
            color={tripData.color}
            actions={[
              {
                iconLink: faEye,
                link: `/trip/${tripId}/photos/view`,
                name: "View",
              },
              {
                iconLink: faDownload,
                link: `/trip/${tripId}/photos/download`,
                name: "Download",
              },
              {
                iconLink: faPlus,
                link: `/trip/${tripId}/photos/add`,
                name: "Add",
              },
            ]}
          />
          <QuickActionSection
            sectionName={"Settings"}
            color={tripData.color}
            actions={[
              {
                iconLink: faPlaneDeparture as IconDefinition,
                link: `/trip/${tripId}/settings/status`,
                name: "Status",
              },
              {
                iconLink: faUserEdit,
                link: `/trip/${tripId}/settings/members`,
                name: "Members",
              },
              {
                iconLink: faEdit,
                link: `/trip/${tripId}/settings/edit`,
                name: "Edit",
              },
            ]}
          />
          <QuickActionSection
            sectionName={"Documents"}
            color={tripData.color}
            actions={[
              {
                iconLink: faEye,
                link: `/trip/${tripId}/documents/view`,
                name: "View",
              },
              {
                iconLink: faDownload,
                link: `/trip/${tripId}/documents/manage`,
                name: "Manage",
              },
              {
                iconLink: faUpload,
                link: `/trip/${tripId}/documents/upload`,
                name: "Upload",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
