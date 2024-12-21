// 'use client'
import HeaderNav from "components/market_place/MarketPlaceHeader";
import React from "react";

export default function RootLayout({ children }) {


  let nav_links = [
    { title: "Login", href: "/auth/login" },
    { title: "Register", href: "/auth/register" },
    { title: "Support", href: "/account/support" },
  ];
  return (
    <div>
      <div className="header">
        <HeaderNav nav_links={nav_links} />
      </div>
      {children}
    </div>
  );
}
