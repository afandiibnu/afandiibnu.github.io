import Link from "next/link";
import React, { useState } from "react";

const menus = [
  { title: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { title: "Instagram", href: "https://www.instagram.com/ibnuuafandi/" },
  { title: "Dribbble", href: "https://dribbble.com/khoirulibnu_" },
  { title: "Facebook", href: "https://www.facebook.com/ibnu.afandi.583/" },
];

const Footer = ({ props, theme }) => {
  return (
    <div
      className={`w-full text-white py-20 px-8 md:px-20 flex justify-between items-center z-30 bg-dark flex-wrap`}
    >
      <div className="flex-1 flex items-center gap-x-4">
        <Link href={"/"}>
          <p className="text-primary font-semibold text-base md:text-lg cursor-pointer">
            Ibnuafandi
          </p>
        </Link>
        <div className="h-[2px] w-10 bg-white" />
        <p className="text-white">2022</p>
      </div>

      <div className="text-white flex flex-wrap gap-6 text-sm mt-8 md:mt-0">
        {menus.map((a, index) => {
          return (
            <Link key={index} href={a.href}>
              <p className={"underline cursor-pointer"}>{a.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
