import { LuBookmark } from "react-icons/lu";
import { LuRepeat2 } from "react-icons/lu";

import { FiHeart } from "react-icons/fi";

import React from "react";

function ChatCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora
          quaerat perferendis officiis nulla assumenda alias vitae quo commodi,
          quasi iusto quos voluptatum ducimus quia est sint corrupti maxime
          error?
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="actions">
          <FiHeart />
          <LuRepeat2 />
          <LuBookmark />

        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
