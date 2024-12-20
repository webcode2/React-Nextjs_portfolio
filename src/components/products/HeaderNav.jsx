import { site_details } from "assets/site_detail";
import Dropdown from "components/test";
import { HiChevronDown } from "react-icons/hi2";

import React from "react";

export default function MainHeaderNav() {
  const togglemenu = () => {};

  return (
    <div className="nav relative flex justify-center items-center">
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex   w-full ">
          <a
            href="#"
            className=" px-4  font-semibold text-gray-800   transition duration-700 z-50"
          >
            Home
          </a>
          {site_details.links.map((nav_link, index) => {
            return (
              <div className="group" key={index}>
                <a
                  aria-controls={`dropdown-menu-${nav_link.name}`}
                  href="#"
                  className=" px-4 flex gap-x-3 items-center font-semibold text-gray-800 group-hover:aria-expanded:true  group-hover:opacity-100  z-50 whitespace-nowrap"
                >
                  {nav_link.name} <HiChevronDown />
                </a>
                <div
                  id={`dropdown-menu-${nav_link.name}`}
                  aria-hidden="true"
                  className="absolute left-3/4 -translate-x-1/2  top-auto  z-50 "
                >
                  <div className="xl:mt-10  py-16 rounded hidden group-hover:flex flex-wrap  gap-y-3 lg:w-[50rem] xl:w-[64rem] justify-center z-50 bg-base-200  shadow-lg">
                    {nav_link.sub.map((sub_links, index) => {
                      return (
                        <div className="min-w-[20%] " key={index+"sublink"}>
                          <div className="">
                            <a
                              href=""
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold"
                            >
                              {sub_links.name}
                            </a>
                            <div className="pl-4">
                              {sub_links.links.map((link, index) => {
                                return (
                                  <a
                                    key={`${link.title}${index}`}
                                    href={link.link}
                                    className="block my-2  text-gray-800  border-b-2  hover:border-gray-600  w-fit whitespace-nowrap"
                                  >
                                    {link.title}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          <a
            href="#"
            className=" px-4   font-semibold text-gray-800   transition duration-700 z-50"
          >
            Breads
          </a>
          <a
            href="#"
            className=" px-4   font-semibold text-gray-800   transition duration-700 z-50"
          >
            Nearby Shops
          </a>
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full lg:max-w-xs "
      /> */}

      {/* <Dropdown /> */}
    </div>
  );
}
