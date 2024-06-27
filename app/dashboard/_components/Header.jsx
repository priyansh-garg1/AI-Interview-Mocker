"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogInIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const path = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex p-4 px-8 justify-between w-fulkwl bg-gray-200 shadow-sm">
      <Link href={"/"}>
        <Image src={"/logo.svg"} width={60} height={50} alt="logo" />
      </Link>

      <ul
        className={`md:flex gap-6 items-center w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href={"/dashboard"}
            className={`block mt-4 lg:inline-block lg:mt-0 hover:text-primary hover:font-bold transition-all ${
              path == "/dashboard" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Dashboard
          </Link>
          <Link
            className={`block mt-4 lg:inline-block lg:mt-0 hover:text-primary hover:font-bold transition-all ${
              path == "/dashboard/questions" &&
              "text-primary font-bold cursor-pointer"
            }`}
            href={"/questions"}
          >
            Questions
          </Link>
          <Link
            className={`block mt-4 lg:inline-block lg:mt-0 hover:text-primary hover:font-bold transition-all ${
              path == "/dashboard/upgrade" &&
              "text-primary font-bold cursor-pointer"
            }`}
            href={"/upgrade"}
          >
            Upgrade
          </Link>
          <Link
            className={`block mx-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary hover:font-bold transition-all ${
              path == "/dashboard/how" &&
              "text-primary font-bold cursor-pointer"
            }`}
            href={"/reviews"}
          >
            Users Reviews
          </Link>
          <div className="flex items-center">
            {user && <UserButton />}
            {!user && (
              <Link href={"/sign-in"}>
                {" "}
                <Button className="bg-blue-600 flex items-center gap-2">
                  Login <LogInIcon />
                </Button>{" "}
              </Link>
            )}
          </div>
        </div>
      </ul>

      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            PrepBuddy
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
