import Image from "next/image";
import React from "react";

export default function MayAlsoLikeProduct({ item, id }) {
  return (
    <div key={id} className="rounded-t-md shadow-md overflow-hidden">
      <figure>
        <Image
         width={16} height={9} layout="responsive"
          src={item.image}
          alt={item.title}
          className="h-40 object-cover w-full hover:scale-105 transition-all ease-linear "
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="text-md font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.price}</p>
      </div>
    </div>
  );
}
