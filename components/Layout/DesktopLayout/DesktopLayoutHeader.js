import Link from "next/link";
import React, { useState } from "react";

const menus = [
  { title: "Project", href: "/project" },
  { title: "Blog", href: "/blog" },
];

const DesktopLayoutHeader = (props) => {
  return (
    <div className="w-full h-20 px-20 flex justify-between items-center bg-dark z-30">
      <Link href={"/"}>
        <p className="text-primary font-semibold text-lg cursor-pointer">
          Ibnuafandi
        </p>
      </Link>
      <div className="text-white flex gap-x-6 text-sm">
        {menus.map((a, index) => {
          return (
            <Link key={index} href={a.href}>
              <p className="text-white cursor-pointer underline">{a.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopLayoutHeader;
