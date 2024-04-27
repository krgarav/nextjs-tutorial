"use client";
import React from "react";
import Link from "next/link";
const navRoutes = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "First Blog", href: "/blog/first" },
  { name: "Second Blog", href: "/blog/second" },
];

function Navbar() {
  const mp = navRoutes.map((item, index) => {
    return (
      <>
        <li
          key={index}
          className="hover:bg-slate-500 cursor-pointer p-3 rounded"
        >
          <Link Link href={item.href}>
            {item.name}
          </Link>
        </li>
      </>
    );
  });
  return (
    <main>
      <nav className="w-full bg-gray-300 p-5 justify-center text-center">
        <ul className="flex gap-10 ">{mp}</ul>
      </nav>
    </main>
  );
}

export default Navbar;
