import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Home page</h1>
      <h3>
        <Link href="/">Link to Home</Link>
      </h3>
    </div>
  );
};

export default page;
