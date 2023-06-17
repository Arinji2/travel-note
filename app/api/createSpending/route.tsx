import { Spending } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

export async function POST(request: Request) {
  const spendingData: Spending = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  const error = await supabase.from("spendings").insert(spendingData);

  const budget = await supabase
    .from("trips")
    .select("budget")
    .eq("id", spendingData.tripId);
  if (budget.data === null)
    return new Response("Trip not found", { status: 404 });
  const total = parseInt(budget.data[0].budget) + spendingData.amount;

  await supabase
    .from("trips")
    .update({ budget: total })
    .eq("id", spendingData.tripId);
  await supabase.from("spendings").insert(spendingData);

  return new Response("Success");
}
