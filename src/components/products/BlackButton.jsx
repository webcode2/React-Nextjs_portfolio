import React from "react";

export default function BlackButton({title}) {
  return (
    <button className="btn order-2 lg:order-none bg-[#222934] text-white w-full md:w-6/12">
      {title}
    </button>
  );
}
