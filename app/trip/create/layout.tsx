import { redirect } from "next/navigation";
import Logo from "../../dashboard/logo";
import Profile from "../../dashboard/profileButton";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { auth } from "@clerk/nextjs";

export const metadata = {
  title: "Travel Note | Create",
  description: "Trip Creator for Travel Note",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await useSupabase();
  const { userId } = auth();
  const { data } = await supabase
    .from("users")
    .select("username")
    .eq("id", userId);
  if (data === null) redirect("/setup");

  return (
    <div>
      <div className="bg-[#1E1E1E] sticky top-0 w-full h-[120px] z-[1000] flex flex-row items-center justify-center md:justify-start">
        <div className="w-[50%] h-full flex flex-row items-center justify-start">
          <div className="w-[80%] md:w-[30%] h-full  flex flex-row items-center justify-center gap-5">
            <Logo />
            <div className="w-[3px] h-[50%] md:h-[80%] bg-text"></div>
          </div>

          <div className="w-[60%] h-full  hidden md:flex  flex-col items-start justify-center">
            <h3 className="text-headingBlue font-black text-[30px] line-clamp-1">
              {data[0].username}
            </h3>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-row items-center justify-end">
          <div className="w-[80%] md:w-[30%] h-full  flex flex-col items-center justify-center">
            <Profile />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
