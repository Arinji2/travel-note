import { useSupabase } from "@/utils/hooks/useSupabase";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs";
import RedirectButton from "./dashboardButton";
import Image from "next/image";
export default async function SetupPage() {
  const { userId } = auth();
  const user = await currentUser();
  const supabase = await useSupabase();
  const checkUser = async () => {
    let { data } = await supabase.from("users").select("*");
    if (data?.length != 0) redirect("/dashboard");
  };
  await checkUser();
  await supabase.from("users").insert({
    id: userId,
    email: user?.emailAddresses[0].emailAddress,
    username: user?.username,
    trips: [],
  });

  return (
    <div className="w-full h-[100svh] bg-background flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-[50%] w-full h-[50%] md:h-full flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-headingBlue text-[40px] font-black md:text-[70px]">
          Account Created!
        </h1>
        <RedirectButton />
      </div>
      <div className="md:w-[40%] w-[90vw] h-[50%] md:h-full flex flex-col items-center justify-center gap-10 relative">
        <Image
          alt="Profile Image"
          src="/profile.svg"
          className="md:object-fit"
          fill
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
