"use client";
import * as React from "react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
function DateComponent() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem("tripDate", newValue.startDate);
  };

  return (
    <div className="md:w-[90%] w-[95%] outline-none h-full md:pl-10 pl-5">
      <Datepicker
        value={value as any}
        primaryColor={"red"}
        asSingle={true}
        onChange={handleValueChange}
        displayFormat="DD/MM/YYYY"
      />
    </div>
  );
}

export default DateComponent;
