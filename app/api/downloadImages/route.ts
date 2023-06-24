import { NextResponse } from "next/server";
import AdmZip from "adm-zip";

export async function POST(request: Request) {
  const images: {
    name: string;
    link: string;
  }[] = await request.json();

  const zip = new AdmZip();
  for (const image of images) {
    const response = await fetch(image.link);
    const data = Buffer.from(await response.arrayBuffer());
    console.log(data);
    zip.addFile(image.name + ".jpg", data);
  }

  const zipBuffer = zip.toBuffer();
  const zipBase64 = zipBuffer.toString("base64");
  const zipName = "images.zip";

  const data = {
    zipBase64,
    zipName,
  };

  return NextResponse.json({ data });
}
