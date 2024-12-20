import Image from "next/image";
import React from "react";

const ImageOverlay = ({ imageSrc = "", title = "", description = "" }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hdden flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none" />
      <div className="absolute bottom-10 left-5 text-white z-20">
        <h1 className="text-2xl font-bold m-0">{title}</h1>
        <p className="text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ImageOverlay;
