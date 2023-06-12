import { User, UserTrip } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";
import { auth } from "@clerk/nextjs";

export async function POST(request: Request) {
  const { userId } = auth();
  const userData: UserTrip = await request.json();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);
  const { data } = await supabase.from("users").select("*").eq("id", userId);
  if (data === null) return new Response("User not found", { status: 404 });
  const serverData = data[0] as User;

  const updatedData = {
    email: serverData.email,
    created_at: serverData.created_at,
    id: userId,
    trips: [...serverData.trips, userData],
    username: serverData.username,
  } as User;

  await supabase.from("users").update(updatedData).eq("id", userId);

  return new Response("Success");
}
