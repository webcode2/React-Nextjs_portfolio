import Image from "next/image";
import React from "react";
import { GiSniffingDog } from "react-icons/gi";
import { GoComment } from "react-icons/go";
import { TfiShoppingCartFull } from "react-icons/tfi";

export default function SocialsTopNav({
  toggleSidebar = () => {},
  right = false,
  main = false,
}) {
  return (
    <header className="flex items-center justify-between bg-white bg-opacity-15 backdrop-blur-lg  border-b h-16  sticky top-0 z-50 bg-transparent lg:px-16 px-5  ">
      {main && (
        <>
          <button
            className="text-gray-800 md:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="gap-x-6 hidden lg:flex">
            <h2 className="text-xl cursor-pointer   font-semibold whitespace-nowrap">
              For You
            </h2>
            <h2 className="text-xl cursor-pointer underline font-semibold">
              Following
            </h2>
          </div>
        </>
      )}
      {right && (
        <div className="header  w-full flex justify-end items-center">
          <div className="flex items-center gap-2 gap-x-8 ">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    width={16}
                    height={9}
                    layout="responsive"
                    alt="Tailwind CSS Navbar component"
                    src="https://plus.unsplash.com/premium_photo-1707410050564-df6b5503f220?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <div
              className="tooltip hoher:tooltip-open tooltip-bottom"
              data-tip="Market Place"
            >
              <TfiShoppingCartFull className="hover:scale-110 " size={25} />
            </div>
            <div
              className="tooltip hoher:tooltip-open tooltip-bottom"
              data-tip="Chat"
            >
              <GoComment size={25} className="hover:scale-110 " />
            </div>
            <div
              className="tooltip hoher:tooltip-open tooltip-bottom"
              data-tip="Find Pet"
            >
              <GiSniffingDog size={25} className="hover:scale-110 " />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
