import { Image, User, UserTrip } from "@/utils/types";

import { supabaseClient } from "@/utils/supabaseClient";
import { getClerkToken } from "@/utils/supabaseToken";

import { NextResponse } from "next/server";
import { getUserId } from "@/utils/func";

export async function POST(request: Request) {
  const imageData: {
    day: string;
    user: string;
  } = await request.json();

  const token = await getClerkToken();
  const supabase = await supabaseClient(token);
  const userId = await getUserId(imageData.user);
  const { data } = await supabase
    .from("images")
    .select("*")
    .eq("userId", userId)
    .eq("day", imageData.day)
    .returns<Image[]>();
  if (data === null || data.length == 0)
    return new Response("Image not found", { status: 404 });

  return NextResponse.json({ data });
}
