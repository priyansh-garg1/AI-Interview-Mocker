"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const { user } = useUser();
  const isLoggedIn = user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-200 px-4 py-2 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image src={"/logo.png"} width={50} height={70} />
          </Link>
        </div>

        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className="text-white hover:text-primary hover:font-bold focus:outline-none"
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
          </Button>
        </div>

        <nav className="hidden md:flex space-x-7">
          <Link
            href="/"
            className={`  text-gray-600 hover:text-primary hover:font-bold ${
              path == "/" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-gray-600 hover:text-primary hover:font-bold ${
              path == "/dashboard" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/pricing"
            className={`text-gray-600 hover:text-primary hover:font-bold ${
              path == "/pricing" && "text-primary font-bold cursor-pointer"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-primary hover:font-bold ${
              path == "/about" && "text-primary font-bold cursor-pointer"
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:block">
          {isLoggedIn ? (
            <UserButton />
          ) : (
            <Link href={"/dashboard"}>
              <Button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Login <LogInIcon />
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 ">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className={`  text-gray-600 hover:text-primary hover:font-bold ${
                path == "/" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`text-gray-600 hover:text-primary hover:font-bold ${
                path == "/dashboard" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className={`text-gray-600 hover:text-primary hover:font-bold ${
                path == "/pricing" && "text-primary font-bold cursor-pointer"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`text-gray-600 hover:text-primary hover:font-bold ${
                path == "/about" && "text-primary font-bold cursor-pointer"
              }`}
            >
              About Us
            </Link>
            {isLoggedIn ? (
              <UserButton />
            ) : (
              <Link href={"/dashboard"}>
                <Button className="bg-primary text-white flex items-center gap-2 px-4 w-min py-2 rounded-md hover:bg-blue-600">
                  Login <LogInIcon />
                </Button>
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
