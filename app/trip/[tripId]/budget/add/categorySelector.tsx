"use client";

import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CategorySelector({ color }: { color: string }) {
  const [category, setCategory] = useState("");
  const [save, setSave] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-[90%] h-full flex flex-col items-start justify-center gap-5">
      <h4 className="text-white text-[20px] font-bold">
        5.{" "}
        <span
          style={{ "--color": color } as React.CSSProperties}
          className="text-[--color]"
        >
          Category{" "}
        </span>
        of Spending
      </h4>

      <div className="w-full flex flex-row items-center justify-start gap-4 flex-wrap">
        <div
          className={`${
            category === "Lodging" ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg text-white font-black text-[20px] flex flex-col items-center justify-center hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[--color] shrink-0`}
          onClick={() => setCategory("Lodging")}
          style={{ "--color": color } as React.CSSProperties}
        >
          <p>Lodging</p>
        </div>
        <div
          className={`${
            category === "Transportation"
              ? "shadow-black shadow-lg scale-105 "
              : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg text-white font-black text-[20px] flex flex-col items-center justify-center hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[--color] shrink-0`}
          onClick={() => setCategory("Transportation")}
          style={{ "--color": color } as React.CSSProperties}
        >
          <p>Transport</p>
        </div>
        <div
          className={`${
            category === "Food" ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg text-white font-black text-[20px] flex flex-col items-center justify-center hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[--color] shrink-0`}
          onClick={() => setCategory("Food")}
          style={{ "--color": color } as React.CSSProperties}
        >
          <p>Food</p>
        </div>
        <div
          className={`${
            category === "Misc." ? "shadow-black shadow-lg scale-105 " : ""
          } w-[134px] transition-all ease-in-out duration-300 hover:shadow-lg text-white font-black text-[20px] flex flex-col items-center justify-center hover:shadow-black hover:scale-105 hover:cursor-pointer  h-[50px] rounded-lg bg-[--color] shrink-0`}
          onClick={() => setCategory("Misc.")}
          style={{ "--color": color } as React.CSSProperties}
        >
          <p>Misc.</p>
        </div>
      </div>
      <div className="w-full h-fit flex flex-row items-center justify-start flex-wrap gap-3">
        <h4
          className="text-white text-[15px] font-bold p-2 pl-6 pr-6 rounded-[5px] bg-green-500 md:ml-10 ml-5 hover:cursor-pointer transition-all ease-in-out duration-300 border-green-500 border-4 hover:bg-white hover:text-green-500"
          onClick={() => {
            if (category.length === 0) {
              setSave(false);
              setError(true);
            } else {
              localStorage.setItem("spendingCategory", category);
              setSave(true);
              setError(false);
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
            Choose a Category
          </h4>
        )}
      </div>
    </div>
  );
}

export default CategorySelector;
