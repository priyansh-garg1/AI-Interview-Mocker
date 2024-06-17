"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const path = usePathname();
  return (
    <div className="flex p-4 px-8 justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={60} height={50} alt="logo" />
      <ul className="hidden md:flex gap-6 items-center">
        <li
          className={`hover:text-primary hover:font-bold transition-all ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ${
            path == "/dashboard/upgrade" && "text-primary font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
