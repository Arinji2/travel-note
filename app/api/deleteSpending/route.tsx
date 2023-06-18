import { Spending } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

export async function POST(request: Request) {
  const data: {
    tripId: string;
    index: string;
    amount: string;
  } = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  await supabase.from("spendings").delete().eq("id", data.index);

  return new Response("Success");
}
