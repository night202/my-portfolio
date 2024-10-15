"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Skills", href: "/skills" },
    { id: 3, name: "Experiences", href: "/experiences" },
  ];
  const path = usePathname();

  return (
    <nav className=" bg-gray-800 mx-10 rounded-b-2xl">
      <div className="container  mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side */}
        <div className="text-4xl font-bol text-blue-400 ">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Right Side*/}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`p-2 text-xl font-medium ${
                path === link.href
                  ? "text-gray-400 border-b-2 border-blue-600"
                  : "text-gray-300  hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-white" /> // Close icon from react-icons
            ) : (
              <FiMenu className="w-6 h-6 text-white" /> // Menu icon from react-icons
            )}
          </button>
        </div>
      </div>

      {/* Mobile*/}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  path === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
