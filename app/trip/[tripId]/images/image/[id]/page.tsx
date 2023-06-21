import { useSupabase } from "@/utils/hooks/useSupabase";
import { Image as ImageType } from "@/utils/types";
import Image from "next/image";

import { redirect } from "next/navigation";
import ImageComp from "./imageComp";
import { getColor } from "../../../budget/utils";
import RedirectButton from "./redirectButton";

export default async function View({ params }: { params: { id: string } }) {
  const supabase = await useSupabase();
  const ImageData = await supabase
    .from("images")
    .select("*")
    .eq("id", params.id)

    .returns<ImageType[]>();
  if (ImageData.data === null || ImageData.error) redirect("/dashboard");
  const image = ImageData.data[0];
  let width = parseInt(image.width);
  let height = parseInt(image.height);
  if (width > 1000) width = 1000;
  if (height > 1000) height = 1000;

  width = width * 0.5;
  height = height * 0.5;

  if (width < 200) width = width * 2;
  if (height < 200) height = width * 2;

  const ColorData = await supabase
    .from("trips")
    .select("color")
    .eq("id", image.tripId)
    .single();
  if (ColorData.data === null || ColorData.error) redirect("/dashboard");
  let color = getColor({ color: ColorData.data.color });

  const name = await supabase
    .from("users")
    .select("username")
    .eq("id", image.userId);
  if (name.data === null) redirect("/dashboard");
  image.userId = name.data[0].username;

  return (
    <div className="w-full min-h-[100svh] h-fit flex flex-col items-center justify-start bg-background pt-10 pb-5">
      <div className=" relative rounded-lg bg-black">
        <ImageComp imageProps={image} height={height} width={width} />
      </div>
      <div
        className="bg-[#1E1E1E] h-fit p-4 w-[90%] flex flex-col items-center justify-center gap-4 md:w-[50%] mt-10 rounded-lg mb-10"
        style={{ "--color": color } as React.CSSProperties}
      >
        <div className="flex flex-row items-center justify-start gap-3">
          <h2 className="text-[20px]  md:text-[30px] text-[--color] font-bold">
            Name:{" "}
          </h2>
          <h2 className="text-[20px] line-clamp-1 md:text-[30px] text-white font-bold">
            {image.name}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <h2 className="text-[20px]  md:text-[30px] text-[--color] font-bold">
            User:{" "}
          </h2>
          <h2 className="text-[20px] line-clamp-1 md:text-[30px] text-white font-bold">
            {image.userId}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <h2 className="text-[20px]  md:text-[30px] text-[--color] font-bold">
            Date:{" "}
          </h2>
          <h2 className="text-[20px] line-clamp-1 md:text-[30px] text-white font-bold">
            {image.uploaded_at.split("-")[2] +
              "/" +
              image.uploaded_at.split("-")[1] +
              "/" +
              image.uploaded_at.split("-")[0]}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <h2 className="text-[25px] md:text-[30px] text-[--color] font-bold">
            Day:{" "}
          </h2>
          <h2 className="text-[25px] md:text-[30px] text-white font-bold">
            {image.day}
          </h2>
        </div>
      </div>
      <RedirectButton />
    </div>
  );
}
