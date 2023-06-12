"use client";
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
const options = {
  title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};

function DateComponent() {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className="flex flex-col items-center w-full h-full gap-5 mt-20">
      <h1 className="text-2xl font-bold">Date Picker Demo</h1>
      <div className="relative w-1/4">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Date
        </label>
        <Datepicker
          show={show}
          setShow={(state: boolean) => setShow(state)}
          options={options}
          classNames="relative"
        />
      </div>
    </div>
  );
}

export default DateComponent;
