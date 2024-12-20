import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function AsideNavBtn({ title, icon }) {
  return (
    <button className="btn bg-transparent border-none shadow-none w-full text-base hover:text-white hover:bg-primary">
      <div className="flex justify-between  items-center w-full">
        <div className="start flex gap-x-3 items-end">
          {icon}
          <p className="text-start w-full">{title}</p>
        </div>
        <IoChevronForwardSharp />
      </div>
    </button>
  );
}
