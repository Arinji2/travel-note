import ClientContainer from "./clientContainer";
import DropZoneComponent from "./dropZoneComponent";

export default async function Page({ params }: { params: { tripId: string } }) {
  return (
    <div className="w-full min-h-[calc(100svh-120px)] h-fit bg-background flex flex-col items-center justify-start">
      <h1 className="text-white font-black text-[40px] md:text-[60px] pt-10 text-center">
        Upload Image
      </h1>
      <ClientContainer tripId={params.tripId} />
    </div>
  );
}
