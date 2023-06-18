import Link from "next/link";

function RedirectButton({ tripId }: { tripId: string }) {
  return (
    <Link
      href={`/trip/${tripId}/budget/add`}
      className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500 md:ml-10 ml-5  hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
    >
      Add New Spending
    </Link>
  );
}

export default RedirectButton;
