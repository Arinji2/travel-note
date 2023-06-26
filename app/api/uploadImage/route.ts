import { imagekit } from "@/utils/imagekitClient";

import { auth } from "@clerk/nextjs";
import { getClerkToken } from "@/utils/supabaseToken";
import { supabaseClient } from "@/utils/supabaseClient";

export async function POST(request: Request) {
  const data: {
    file: string;
    name: string;
    tripId: string;
    day: string;
  } = await request.json();
  const { userId } = auth();
  const token = await getClerkToken();
  const supabase = await supabaseClient(token);

  let name = data.name;

  if (
    !name.includes(".jpg") &&
    !name.includes(".png") &&
    !name.includes(".jpeg")
  )
    name = name + ".jpg";

  const imageKitFile = await imagekit.upload({
    file: data.file,
    fileName: name,
    folder: "/Travel_Note",
    useUniqueFileName: true,
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const currentDate = `${year}-${month}-${day}`;

  await supabase.from("images").insert({
    id: Math.floor(Math.random() * 9999).toString(),
    uploaded_at: currentDate,
    tripId: data.tripId,
    userId: userId,
    name: data.name,
    day: data.day,
    link: imageKitFile.url,
    height: imageKitFile.height,
    width: imageKitFile.width,
    fileId: imageKitFile.fileId,
  });

  return new Response("E");
}
