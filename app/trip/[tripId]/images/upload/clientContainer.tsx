"use client";

import { useEffect, useRef, useState } from "react";
import DropzoneComponent from "./dropZoneComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import { toBase64 } from "@/utils/func";

export default function ClientContainer({ tripId }: { tripId: string }) {
  const [file, setFile] = useState<File>();
  const [viewPreview, setViewPreview] = useState(false);
  const imgPreview = useRef<any>(null);
  const [viewPage, setViewPage] = useState(0);
  const [error, setError] = useState({
    name: false,
    day: false,
  });
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target == null) return;
        const img = document.createElement("img");
        img.src = e.target.result as string;

        img.className = "w-full h-full object-cover rounded-lg";

        imgPreview.current.appendChild(img);

        setViewPreview(true);
      };
      reader.readAsDataURL(file);

      return () => {
        if (imgPreview.current != null) imgPreview.current.innerHTML = "";
        setViewPreview(false);
      };
    }
  }, [file]);

  useEffect(() => {
    if (day === "") setError({ ...error, day: true });
    else setError({ ...error, day: false });
  }, [day]);
  useEffect(() => {
    if (name === "") setError({ ...error, name: true });
    else setError({ ...error, name: false });
  }, [name]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      {viewPage === 0 && (
        <div
          className={`${
            viewPage === 0 ? "opacity-100 " : "opacity-0 "
          } transition ease-in-out duration-500 flex flex-col items-center justify-center gap-10`}
        >
          <DropzoneComponent setFiles={setFile} />
          <div
            className={`${
              viewPreview ? "translate-x-0 " : "translate-x-[5000px] "
            }fixed transition-all ease-in-out duration-300 w-full h-full flex flex-col items-center justify-center`}
          >
            <div
              className={` bg-black opacity-50 w-full h-full absolute`}
            ></div>
            <FontAwesomeIcon
              icon={faTimes as IconProp}
              className="absolute right-10 top-28 w-[40px] h-[40px] text-white cursor-pointer z-[100]"
              onClick={() => setViewPreview(false)}
            />
            <div
              //center the div
              className={`aspect-square w-[90vw] md:w-auto md:h-[70svh] z-50 overflow-hidden transition-all ease-in-out duration-300`}
              ref={imgPreview}
            ></div>
          </div>
          <h1
            onClick={() => {
              if (file) setViewPage(1);
            }}
            className={`${
              file
                ? "text-white bg-green-500 border-green-500 hover:bg-white hover:text-green-500 hover:cursor-pointer"
                : "bg-[#1E1E1E] text-gray-400 border-[#1E1E1E]"
            } text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] transition-all ease-in-out duration-300  border-4 `}
          >
            Continue
          </h1>
        </div>
      )}
      {viewPage === 1 && (
        <div
          className={`${
            viewPage === 1 ? "opacity-100 " : "opacity-0 "
          } transition ease-in-out duration-500 flex flex-col items-center justify-center gap-10 w-full h-full`}
        >
          <div className="w-[90vw] md:w-[80vw] md:h-[60svh] h-[80svh] bg-[#1E1E1E] rounded-lg mt-5 flex flex-col items-center justify-start md:justify-center md:flex-row ">
            <div className=" w-full md:w-[50%] h-full flex flex-col items-start justify-center pl-4">
              <h2 className="text-[40px] md:text-[50px] font-black text-white">
                Enter Name
              </h2>
              <div className="w-[80%] h-fit flex flex-col items-center justify-center group">
                <input
                  className="text-[15px] md:text-[20px] font-bold bg-transparent text-white rounded-lg p-3 outline-none w-full"
                  placeholder="Name..."
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <div
                  className={`${
                    error.name ? "bg-red-600 " : "bg-white "
                  }transition ease-in-out duration-300 rounded-lg h-[3px] w-full`}
                ></div>
              </div>
              <h2 className="text-[40px] md:text-[50px] font-black text-white mt-10">
                Enter Day
              </h2>
              <div className="w-[80%] h-fit flex flex-col items-center justify-center group">
                <input
                  className="text-[15px] md:text-[20px] font-bold bg-transparent text-white rounded-lg p-3 outline-none w-full"
                  placeholder="Day..."
                  type="number"
                  onChange={(e) => setDay(e.target.value)}
                />
                <div
                  className={`${
                    error.day ? "bg-red-600 " : "bg-white "
                  }transition ease-in-out duration-300 rounded-lg h-[3px] w-full`}
                ></div>
              </div>
            </div>
            <div className=" w-full md:w-[50%] h-full flex flex-col items-center justify-center">
              <h1
                className="text-white text-[20px] font-bold p-4 pl-8 pr-8 rounded-[5px] bg-green-500   hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
                onClick={async () => {
                  if (name === "") {
                    setError({ ...error, name: true });
                    return;
                  }
                  if (day === "") {
                    setError({ ...error, day: true });
                    return;
                  }

                  setError({ ...error, name: false, day: false });
                  setLoading(true);
                  if (file == undefined) return;
                  const image = (await toBase64(file)) as string;
                  const data = {
                    file: image.split(",")[1],
                    name: name.replace(/\s+/g, "-").toLowerCase(),
                    day: day,
                    tripId: tripId,
                  };

                  await fetch("/api/uploadImage", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  setLoading(false);
                  router.push(`/trip/${tripId}`);
                }}
              >
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner as IconProp}
                    spin={true}
                    className="w-[40px] h-[40px]"
                  />
                ) : (
                  "Upload"
                )}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
