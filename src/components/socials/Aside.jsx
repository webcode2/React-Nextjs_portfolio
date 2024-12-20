import React from "react";
import { BsShop } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoChevronForwardSharp } from "react-icons/io5";
import AsideNavBtn from "./AsideNavBtn";

export default function Aside({ isSidebarVisible = false }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0  transform  bg-black lg:bg-white h-screen   overflow-y-auto ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:translate-x-0 md:relative md:w-3/12 z-20 `}
    >
      <div className="lg:border mx-4  justify-between flex flex-col h-full border-t-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">
            {"Doogy-App".toUpperCase()}
          </h1>
          <nav className="mt-6 flex flex-col gap-y-1  ">
            <AsideNavBtn title={"Profile"} icon={<FaUser size={30} />} />
            <AsideNavBtn title={"Shop"} icon={<CiShop size={30} />} />
            <AsideNavBtn title={"Market Place"} icon={<BsShop size={30} />} />
            <AsideNavBtn title={"Feeds"} icon={<CgFeed size={30} />} />
          </nav>
        </div>
        <div className="flex flex-col justify-between px-5 ">
          <button className="btn btn-primary px-10 mb-10 text-white">
            Create Post
          </button>
        </div>
      </div>
    </aside>
  );
}
