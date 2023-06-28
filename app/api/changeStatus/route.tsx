import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

export async function POST(request: Request) {
  const data: {
    tripId: string;
    name: string;
  } = await request.json();

  const token = await getClerkToken();
  const supabase = await supabaseClient(token);
  await supabase
    .from("trips")
    .update({ status: data.name })
    .eq("id", data.tripId);

  return new Response("Success");
}
