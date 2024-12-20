import React from "react";

export default function TapSubTitle({
  icon = "",
  title = "Title is Required",
}) {
  return (
    <div className="title flex gap-x-2 items-center font-semibold">
   {icon}
    {title}
  </div>
  );
}
