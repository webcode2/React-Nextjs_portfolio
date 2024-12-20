import React from "react";
import Avatar from "./Avatar";
import { CgChevronRightR } from "react-icons/cg";
import { IoChevronForwardSharp } from "react-icons/io5";

const users = [];

const User = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full bg-primary py-2 px-2 rounded-xl bg-opacity-10">
        <div className="flex">
          <Avatar
            imgUrl={
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
          <div className="">
            <p className="">@Mark_Uzor</p>
            <p className="">{new Date().toDateString()}</p>
          </div>
        </div>
        <IoChevronForwardSharp />
      </div>
    </div>
  );
};

export default function RightUserList() {
  return (
    <div className=" border  border-t-0   px-5 py-10 flex flex-col gap-y-4 mx-4">
      <div className="font-semibold  font-sans">
        <p>Users Online</p>
      </div>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}
