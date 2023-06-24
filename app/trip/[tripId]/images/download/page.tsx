import { getUserId } from "@/utils/func";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getColor } from "../../budget/utils";
import UserDropdown from "./userDropDown";
import ClientContainer from "./clientContainer";
import DayDropdown from "../view/dayDropdown";

export default async function View({ params }: { params: { tripId: string } }) {
  const { userId } = auth();
  const { tripId } = params;
  const supabase = await useSupabase();
  const clerkUser = await currentUser();
  let user = userId;

  if (user === null) redirect("/dashboard");
  user = (await getUserId(user)) as string;
  let currUser = clerkUser?.username as string;
  let day = "1";

  const DaysData = await supabase
    .from("images")
    .select("day")
    .eq("tripId", params.tripId)
    .eq("userId", user)
    .order("day", { ascending: true });

  if (DaysData.data === null) redirect("/dashboard");

  const uniqueDays: string[] = [];
  const map = new Map();
  for (const item of DaysData.data) {
    if (!map.has(item.day)) {
      map.set(item.day, true);
      uniqueDays.push(item.day);
    }
  }
  const UsersData = await supabase
    .from("images")
    .select("userId")
    .eq("tripId", params.tripId)
    .eq("day", day)
    .order("userId", { ascending: true });

  if (UsersData.data === null) redirect("/dashboard");
  const uniqueUsers: string[] = [];
  const map2 = new Map();
  for (const item of UsersData.data) {
    if (!map2.has(item.userId)) {
      map2.set(item.userId, true);
      uniqueUsers.push(item.userId);
    }
  }
  let uniqueUserNames: string[] = [];
  for (const item of uniqueUsers) {
    const name = await supabase
      .from("users")
      .select("username")
      .eq("id", item)
      .single();
    uniqueUserNames.push(name.data!.username);
  }
  let colorData = await supabase
    .from("trips")
    .select("color")
    .eq("id", params.tripId);

  if (colorData === null) redirect("/dashboard");

  let color = getColor({ color: colorData.data![0].color });
  const containerData = {
    users: uniqueUserNames,
    day: day,
    user: currUser,
    tripId: tripId,
    color: color,
  };

  return (
    <div className="bg-background w-full h-fit min-h-[100svh] flex flex-col items-center justify-start">
      <ClientContainer data={containerData}>
        <div></div>
      </ClientContainer>
    </div>
  );
}
