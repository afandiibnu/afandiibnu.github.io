import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const menus = [
  { title: "Project", href: "/project" },
  { title: "Blog", href: "/blog" },
];

const Navbar = ({ props, theme }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={`w-full sticky top-0 z-50 h-20 px-8 md:px-20 flex justify-between items-center ${
        theme === "dark"
          ? "bg-dark"
          : theme === "transparent"
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <p className="text-primary font-semibold text-base md:text-lg cursor-pointer">
          Ibnuafandi
        </p>
      </Link>
      <div className="text-white flex gap-x-6 text-sm">
        {menus.map((a, index) => {
          return (
            <Link key={index} href={a.href}>
              <p
                className={`${
                  theme === "dark" ? "text-secondary" : "text-dark"
                } ${
                  currentRoute === a.href
                    ? "font-semibold text-white"
                    : "font-normal"
                } cursor-pointer underline`}
              >
                {a.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
