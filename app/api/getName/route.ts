import { User, UserTrip } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const userId: {
    id: string;
  } = await request.json();

  const token = await getClerkToken();
  const supabase = await supabaseClient(token);
  const { data } = await supabase
    .from("users")
    .select("username")
    .eq("id", userId.id);
  if (data === null) return new Response("User not found", { status: 404 });

  return new Response(data[0].username);
}
