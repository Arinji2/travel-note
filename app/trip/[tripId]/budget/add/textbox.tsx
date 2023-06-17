"use client";

import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TextBox({
  index,
  line,
  emphasis,
  errorMessage,
  localStorageName,
  checkError,
  color,
}: {
  index: number;
  line: string;
  emphasis: string;
  errorMessage: string;
  localStorageName: string;
  checkError: boolean;
  color: string;
}) {
  const [question, setQuestion] = useState("");
  const [save, setSave] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-[90%] h-full flex flex-col items-start justify-center gap-5">
      <h4 className="text-white text-[20px] font-bold">
        {index}.{" "}
        <span
          className="text-[--color]"
          style={{ "--color": color } as React.CSSProperties}
        >
          {emphasis}{" "}
        </span>
        {line}
      </h4>

      <input
        className="md:ml-10 ml-5 w-[85%] md:w-[90%] h-[50px] bg-[#A09E9E] rounded-lg px-5 text-white text-[15px] md:text-[20px] font-bold outline-none"
        placeholder="Trip Name"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="w-full h-fit flex flex-row items-center justify-start flex-wrap gap-3">
        <h4
          className="text-white text-[15px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-green-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
          onClick={() => {
            if (checkError) {
              if (question.length === 0) {
                setSave(false);
                setError(true);
              } else {
                localStorage.setItem(localStorageName, question);
                setSave(true);
                setError(false);
              }
            } else {
              localStorage.setItem(localStorageName, question);
              setSave(true);
            }
          }}
        >
          {save ? (
            <FontAwesomeIcon
              icon={faCheck as IconProp}
              className="w-[50px] h-50px] "
            />
          ) : (
            "Save"
          )}
        </h4>
        {error && (
          <h4 className="text-white text-[15px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-red-500 md:ml-10 ml-5 border-red-500 border-4">
            {errorMessage}
          </h4>
        )}
      </div>
    </div>
  );
}

export default TextBox;
