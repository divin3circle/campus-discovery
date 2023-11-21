import React from "react";
import HomeNavbar from "./HomeNavbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <nav>
        <HomeNavbar />
      </nav>
      <main>{children}</main>
    </>
  );
}
