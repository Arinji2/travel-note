import { useSupabase } from "./hooks/useSupabase";

export async function getUserId(username: string) {
  const supabase = await useSupabase();
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("username", username);

  if (data === null || data[0] === undefined) return null;
  return data[0].id as string;
}
