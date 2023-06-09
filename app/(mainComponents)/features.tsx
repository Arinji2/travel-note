import Image from "next/image";

function Features() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center pb-5 md:gap-10 gap-5">
      <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-5">
        <div className="w-[90vw] md:w-[65vw] h-[400px] flex md:flex-row flex-col items-center justify-center bg-[#1E1E1E] md:ml-5 rounded-lg">
          <div className="w-full h-[48%] md:w-[30%] md:h-full flex flex-col items-center justify-center">
            <h2 className="font-black text-headingRed text-[70px]">Trips</h2>
          </div>
          <div className="md:w-[5px] md:h-[40%] bg-headingRed md:ml-3 w-[80%] h-[2%]"></div>
          <div className="w-full h-[60%] md:w-[65%] md:h-full flex flex-col items-center justify-center gap-3">
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Create Trips with one click.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Add people to each trip.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Group people as friends and family.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[35vw] h-[400px]  w-[90vw] relative md:mr-5">
          <Image
            src="/features/travellers.svg"
            alt="Travellers"
            fill
            quality={100}
            className="md:object-fit"
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-3 md:gap-5">
        <div className="w-[90vw] md:w-[65vw] h-[400px] flex md:flex-row flex-col items-center justify-center bg-[#1E1E1E] md:mr-5 rounded-lg">
          <div className="w-full h-[48%] md:w-[30%] md:h-full flex flex-col items-center justify-center">
            <h2 className="font-black text-headingBlue text-[70px]">Budget</h2>
          </div>
          <div className="md:w-[5px] md:h-[40%] bg-headingBlue md:ml-3 w-[80%] h-[2%]"></div>
          <div className="w-full h-[60%] md:w-[65%] md:h-full flex flex-col items-center justify-center gap-3">
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Set a Travel Budget for your whole trip.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Record all the trip's spending's.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Group spending's into families and friends.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Easily calculate money owed by each group.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[35vw] h-[400px]  w-[90vw] relative md:mr-5">
          <Image
            src="/features/treasure.svg"
            alt="Treasure"
            fill
            quality={100}
            className="md:object-fit"
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-5">
        <div className="w-[90vw] md:w-[65vw] h-[400px] flex md:flex-row flex-col items-center justify-center bg-[#1E1E1E] md:ml-5 rounded-lg">
          <div className="w-full h-[48%] md:w-[30%] md:h-full flex flex-col items-center justify-center">
            <h2 className="font-black text-headingRed text-[70px]">Photos</h2>
          </div>
          <div className="md:w-[5px] md:h-[40%] bg-headingRed md:ml-3 w-[80%] h-[2%]"></div>
          <div className="w-full h-[60%] md:w-[65%] md:h-full flex flex-col items-center justify-center gap-3">
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Store photos securely.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Add 20 photos per day per person.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                View photos whenever required.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Download all photos as zip.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[35vw] h-[400px]  w-[90vw] relative md:mr-5">
          <Image
            src="/features/photographer.svg"
            alt="Photographer"
            fill
            quality={100}
            className="md:object-fit"
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-3 md:gap-5">
        <div className="w-[90vw] md:w-[65vw] h-[400px] flex md:flex-row flex-col items-center justify-center bg-[#1E1E1E] md:mr-5 rounded-lg">
          <div className="w-full h-[48%] md:w-[30%] md:h-full flex flex-col items-center justify-center">
            <h2 className="font-black text-headingBlue text-[70px]">PDF's</h2>
          </div>
          <div className="md:w-[5px] md:h-[40%] bg-headingBlue md:ml-3 w-[80%] h-[2%]"></div>
          <div className="w-full h-[60%] md:w-[65%] md:h-full flex flex-col items-center justify-center gap-3">
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Store Trip Bookings as PDF's.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                View all PDF's from the site directly.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Share links to PDF's.
              </p>
            </div>
            <div className="w-[90%] h-[30px] flex flex-row items-center justify-start gap-2">
              <div className="w-[15px] h-[15px] bg-text rounded-full"></div>
              <p className="font-bold text-text text-[12px] md:text-[15px]">
                Manage PDF's as the need arises.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[35vw] h-[400px]  w-[90vw] relative md:mr-5">
          <Image
            src="/features/pdf.svg"
            alt="Pdf"
            fill
            quality={100}
            className="md:object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
