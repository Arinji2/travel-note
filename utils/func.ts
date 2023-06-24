import { useSupabase } from "./hooks/useSupabase";
import { useSupabaseClient } from "./hooks/useSupabaseClient";

export async function getUserId(username: string) {
  const supabase = await useSupabase();
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("username", username);

  if (data === null || data[0] === undefined) return null;
  return data[0].id as string;
}

export async function getUserIdClient(username: string) {
  const supabase = await useSupabaseClient();
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("username", username);

  if (data === null || data[0] === undefined) return null;
  return data[0].id as string;
}
