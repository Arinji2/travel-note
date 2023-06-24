import { auth, useAuth } from "@clerk/nextjs";

export const getClerkToken = async () => {
  const { getToken } = auth();
  const supabaseAccessToken = await getToken({ template: "supabase" });
  return supabaseAccessToken;
};

export const getClientClerkToken = async () => {
  const { getToken } = useAuth();
  const supabaseAccessToken = await getToken({ template: "supabase" });
  return supabaseAccessToken;
};
