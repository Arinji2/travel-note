import { Trip } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

export async function POST(request: Request) {
  const userData: Trip = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  await supabase.from("trips").insert(userData);

  return new Response("Success");
}
