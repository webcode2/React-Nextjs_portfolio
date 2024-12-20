import Image from "next/image";
import React from "react";

function Avatar({ imgUrl }) {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full">
        <Image alt={"prfile"} src={imgUrl} />
      </div>
    </div>
  );
}

export default Avatar;
