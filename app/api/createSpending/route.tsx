import { Spending } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

export async function POST(request: Request) {
  const spendingData: Spending = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  await supabase.from("spendings").insert(spendingData);
  return new Response("Success");
}
