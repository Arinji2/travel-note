import { Spending } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const spendingData: Spending = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  await supabase.from("spendings").insert(spendingData);
  revalidatePath(`/trip/[tripId]/budget`);
  return new Response("Success");
}
