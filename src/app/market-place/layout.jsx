// import HeaderNav from "components/HeaderNav";
import Footer from "components/Footer";
import HeaderNav from "components/new_head";
import React from "react";

export default function RootLayout({ children }) {
  let nav_links = [
    { title: "Breeds", href: "/breeds" },
    { title: "category", href: "/categories" },
    { title: "account", href: "/auth/login" },
  ];
  return (
    <div>
      <div className="header">
        <HeaderNav />
      </div>
      {children}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
