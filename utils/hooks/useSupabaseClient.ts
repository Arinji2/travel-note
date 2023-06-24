import { supabaseClient } from "../supabaseClient";
import { getClientClerkToken } from "../supabaseToken";

export const useSupabaseClient = async () => {
  const token = await getTokens();

  const supabase = await createClient(token);
  return supabase;
};

const getTokens = async () => {
  const token = await getClientClerkToken();
  return token;
};

const createClient = async (token: any) => {
  const supabase = await supabaseClient(token);
  return supabase;
};
