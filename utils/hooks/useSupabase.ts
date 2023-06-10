import { supabaseClient } from "../supabaseClient";
import { getClerkToken } from "../supabaseToken";

export const useSupabase = async () => {
  const token = await getTokens();

  const supabase = await createClient(token);
  return supabase;
};

const getTokens = async () => {
  const token = await getClerkToken();
  return token;
};

const createClient = async (token: any) => {
  const supabase = await supabaseClient(token);
  return supabase;
};
