import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
      <nav>Home Navbar</nav>
      <main>{children}</main>
    </>
  );
}
