"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-lg">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        {/* Brand Logo */}
        <div className="text-xl font-bold">
          <Link href="/">LaptopBrand</Link>
        </div>

        {/* Burger Icon for Mobile */}
        <button
          className="block p-2 md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 md:items-center text-lg`}>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#features"
              className="block transition-colors duration-200 hover:text-blue-500">
              Features
            </Link>
          </li>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#laptop-details"
              className="block transition-colors duration-200 hover:text-blue-500">
              Details
            </Link>
          </li>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#performance"
              className="block transition-colors duration-200 hover:text-blue-500">
              Performance
            </Link>
          </li>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#gallery"
              className="block transition-colors duration-200 hover:text-blue-500">
              Gallery
            </Link>
          </li>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#video"
              className="block transition-colors duration-200 hover:text-blue-500">
              Video
            </Link>
          </li>
          <li className="py-2 text-center md:px-2">
            <Link
              href="#cta"
              className="block transition-colors duration-200 hover:text-blue-500">
              Buy Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
