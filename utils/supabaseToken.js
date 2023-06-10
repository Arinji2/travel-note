import { auth } from "@clerk/nextjs";

export const getClerkToken = async () => {
  const { getToken } = auth();
  const supabaseAccessToken = await getToken({ template: "supabase" });
  return supabaseAccessToken;
};
