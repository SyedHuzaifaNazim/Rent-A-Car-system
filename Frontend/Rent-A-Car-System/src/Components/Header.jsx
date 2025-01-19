import React, { useState } from "react";
import Home from "./Home"
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-500 sticky top-0 z-50 px-4">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn.vectorstock.com/i/1000v/86/00/logo-for-car-rental-and-sales-vector-25468600.jpg"
              alt="Logo"
              className="h-14 w-auto mr-4"
            />
          </div>

          {/* Hamburger menu (for mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Center section: Menu */}
          <nav className="hidden md:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 text-white">
              <li>
                <a href="/Home" className="hover:text-secondary font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-secondary font-bold">
                  About us
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-secondary font-bold">
                  Results
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-secondary font-bold">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-secondary font-bold">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-secondary font-bold">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right section: Buttons (for desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://github.com/SyedHuzaifaNazim/Rent-A-Car-system"
              className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Github
            </a>
            <a
              href="https://github.com/SyedHuzaifaNazim/Rent-A-Car-system/archive/refs/heads/main.zip"
              className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu flex-col items-center space-y-8 md:hidden px-8 bg-gray-500">
          <ul className="w-full text-center">
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#home" className="hover:text-secondary font-bold">
                Home
              </a>
            </li>
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#aboutus" className="hover:text-secondary font-bold">
                About us
              </a>
            </li>
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#results" className="hover:text-secondary font-bold">
                Results
              </a>
            </li>
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#reviews" className="hover:text-secondary font-bold">
                Reviews
              </a>
            </li>
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#portfolio" className="hover:text-secondary font-bold">
                Portfolio
              </a>
            </li>
            <li className="border-b border-gray-300 pb-4 pt-4">
              <a href="#team" className="hover:text-secondary font-bold">
                Team
              </a>
            </li>
            <li className="pb-4 pt-4">
              <a href="#contact" className="hover:text-secondary font-bold">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col mt-6 space-y-2 items-center">
            <a
              href="#"
              className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
            >
              Github
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block flex items-center justify-center min-w-[110px]"
            >
              Download
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
