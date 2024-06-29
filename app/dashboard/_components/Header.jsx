"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogInIcon, User, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 px-4 py-2 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-gray-800">
          <Link href="/"><Image src={'/logo.svg'} width={50} height={70}/></Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-7">
          <Link
            href="/"
            className={`  text-gray-600 hover:text-gray-800 ${
              path == "/" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-gray-600 hover:text-gray-800 ${
              path == "/dashboard" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/jobs"
            className={`text-gray-600 hover:text-gray-800 ${
              path == "/jobs" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Jobs
          </Link>
        </nav>

        {/* Login / User Icon */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <img
              src="path/to/user-icon.jpg" // replace with your user icon path
              alt="User Icon"
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 flex gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login <LogInIcon />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 ">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className={`  text-gray-600 hover:text-gray-800 ${
                path == "/" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`text-gray-600 hover:text-gray-800 ${
                path == "/dashboard" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/jobs"
              className={`text-gray-600 hover:text-gray-800 ${
                path == "/jobs" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Jobs
            </Link>
            {isLoggedIn ? (
              <UserIcon />
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="bg-blue-500 text-white flex items-center gap-2 px-4 w-min py-2 rounded-md hover:bg-blue-600"
              >
                Login <LogInIcon />
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
