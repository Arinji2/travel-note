import { useSupabase } from "@/utils/hooks/useSupabase";
import DayDropdown from "./dayDropdown";
import UserDropdown from "./userDropdown";
import { auth } from "@clerk/nextjs";
import { getUserId } from "@/utils/func";
import { Image } from "@/utils/types";
import { redirect } from "next/navigation";
import ImageComp from "./imageComp";
import { getColor } from "../../budget/utils";

export default async function View({
  params,
  searchParams,
}: {
  params: { tripId: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const { userId } = auth();
  let { user, day } = searchParams;
  if (user === undefined) user = userId as string;
  user = (await getUserId(user)) as string;
  if (user === undefined || user === null) user = userId as string;

  if (day === undefined) day = "1";
  const supabase = await useSupabase();

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
  const ImagesData = await supabase
    .from("images")
    .select("*")
    .eq("tripId", params.tripId)
    .eq("day", day)
    .eq("userId", user)
    .order("uploaded_at", { ascending: false })
    .returns<Image[]>();

  let colorData = await supabase
    .from("trips")
    .select("color")
    .eq("id", params.tripId);

  if (colorData === null) redirect("/dashboard");

  let color = getColor({ color: colorData.data![0].color });

  return (
    <div className="w-full min-h-[100svh] h-fit flex flex-col items-center justify-start pt-14 bg-background">
      <div className="w-[90%] h-fit md:h-[200px] flex flex-col md:flex-row items-start md:items-start justify-evenly">
        <DayDropdown
          limit={parseInt(uniqueDays[uniqueDays.length - 1])}
          currentDay={parseInt(day)}
          user={searchParams.user as string}
          tripId={params.tripId}
          color={color}
        />
        <UserDropdown
          nextUser={uniqueUserNames[uniqueUsers.indexOf(user) + 1]}
          prevUser={uniqueUserNames[uniqueUsers.indexOf(user) - 1]}
          day={day}
          user={searchParams.user as string}
          tripId={params.tripId}
          color={color}
        />
      </div>
      <div className="w-[90%] md:w-[80%] h-[300px] bg-[#1E1E1E] mt-10 rounded-lg flex flex-col items-center justify-start">
        <h2 className="text-[40px] text-white font-black pt-10">Details</h2>
        <div className="flex flex-col items-start justify-center w-[90%] md:w-[70%] h-full line-clamp-1 gap-5">
          <div className="flex flex-row items-center justify-start gap-3">
            <h2 className="text-[15px] md:text-[20px] text-white font-bold">
              User:
            </h2>
            <h2
              className="text-[15px] md:text-[20px] text-[--color] font-bold"
              style={{ "--color": color } as React.CSSProperties}
            >
              {searchParams.user}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <h2 className="text-[15px] md:text-[20px] text-white font-bold">
              Day:
            </h2>
            <h2
              className="text-[15px] md:text-[20px] text-[--color] font-bold"
              style={{ "--color": color } as React.CSSProperties}
            >
              {searchParams.day}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-start gap-3">
            <h2 className="text-[15px] md:text-[20px] text-white font-bold">
              Total Images:
            </h2>
            <h2
              className="text-[15px] md:text-[20px] text-[--color] font-bold"
              style={{ "--color": color } as React.CSSProperties}
            >
              {ImagesData.data!.length}/20
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] h-full gap-4 flex flex-row items-start justify-center flex-wrap mt-10 pb-5">
        {ImagesData.data!.map((image) => (
          <ImageComp
            height={image.height}
            id={image.id}
            width={image.width}
            link={image.link}
            name={image.name}
            key={image.id}
          />
        ))}
        {ImagesData.data!.length === 0 && (
          <h1 className="text-[50px] text-white font-bl">No Images</h1>
        )}
      </div>
    </div>
  );
}
