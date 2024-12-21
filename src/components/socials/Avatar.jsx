import Image from "next/image";
import React from "react";

function Avatar({ imgUrl }) {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full">
        <Image
          width={16}
          height={9}
          layout="responsive"
          alt={"prfile"}
          src={imgUrl}
        />
      </div>
    </div>
  );
}

export default Avatar;
