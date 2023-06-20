import { useSupabase } from "@/utils/hooks/useSupabase";
import TextBox from "./textbox";
import Image from "next/image";
import { Trip } from "@/utils/types";
import { redirect } from "next/navigation";
import CategorySelector from "./categorySelector";
import CreateButton from "./createButton";
import { getColor } from "../utils";

export default async function BudgetAddPage({
  params,
}: {
  params: { tripId: string };
}) {
  const { tripId } = params;
  const supabase = await useSupabase();

  const TripData = await supabase
    .from("trips")
    .select("color")
    .eq("id", tripId)
    .returns<Trip[]>();
  if (TripData.data === null) redirect("/dashboard");
  let color = TripData.data[0].color;
  color = getColor({ color: color });
  return (
    <div className="w-full h-fit min-h-[100svh] bg-background flex flex-col items-center justify-start">
      <h1 className="text-[40px] md:text-[60px] font-black text-white pt-14 text-center">
        Add to Budget
      </h1>
      <div className="w-[95%] md:w-[90%] h-full flex flex-row items-center justify-center mt-10">
        <div className="md:w-[50%] w-full h-full flex flex-col items-start justify-start gap-10 pb-5">
          <TextBox
            emphasis="Name"
            errorMessage="Please Enter a Name"
            index={1}
            line="of Spending *"
            localStorageName="spendingName"
            checkError={true}
            color={color}
          />
          <TextBox
            emphasis="Amount "
            errorMessage="Please Enter an Amount"
            index={2}
            line="of Spending *"
            localStorageName="spendingAmount"
            checkError={true}
            color={color}
          />
          <TextBox
            emphasis="Description"
            errorMessage="Please Enter a Description"
            index={3}
            line="of Spending *"
            localStorageName="spendingDesc"
            checkError={true}
            color={color}
          />
          <TextBox
            emphasis="Group"
            errorMessage="Please Enter a Group"
            index={4}
            line="of Spending"
            localStorageName="spendingGroup"
            checkError={false}
            color={color}
          />
          <CategorySelector color={color} />
          <CreateButton tripId={tripId} />
        </div>
        <div className="w-[50%] md:flex hidden  h-full  flex-col items-center justify-center gap-10 relative">
          <Image
            src="/shopping.svg"
            width={700}
            height={700}
            alt="Shopping"
            quality={100}
            className="fixed bottom-10"
          />
        </div>
      </div>
    </div>
  );
}
