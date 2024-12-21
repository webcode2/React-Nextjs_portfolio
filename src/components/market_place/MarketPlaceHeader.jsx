"use client";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaHeart, FaSearch } from "react-icons/fa";
import MainHeaderNav from "../products/HeaderNav";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Link from "next/link";

export default function HeaderNav({ nav_links = [] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center lg:py-7 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="lg:text-4xl text-2xl  font-bold text-gray-800"
            >
              Pets House
            </a>
          </div>
          {/* navigations */}
          {!nav_links.length >= 1 && (
            <>
              {" "}
              <MainHeaderNav />
              <div className=" items-center flex space-x-4">
                <input
                  type="text"
                  name="searchbar"
                  placeholder="Search..."
                  className="mx-w-sm px-4 py-2 hidden md:block border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Right-side Icons */}
                <button
                  onClick={toggleSearchBar}
                  className="text-gray-800 hover:text-blue-600 lg:hidden transition duration-300"
                >
                  <FaSearch className="w-6 h-6" />
                </button>

                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  <CiHeart className="w-6 h-6 hover:scale-105" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  <CiShoppingCart className="w-6 h-6 hover:scale-105" />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  <CiUser className="w-6 h-6 hover:scale-105" />
                </a>
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
          <div className="auth_links flex gap-x-2">
            {nav_links.map((link, index) => {
              return (
                <>
                  <Link href={link.href}>{link.title}</Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
