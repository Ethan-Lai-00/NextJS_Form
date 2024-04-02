"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  function mobileNav() {
    let menuClass = [];

    if (isMenuOpen) {
      menuClass = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-blue-500",
        "w-full",
        "p-4",
        "left-0",
        "gap-5",
        "flex-col",
        "text-center"
      ];
    } else {
      menuClass = ["hidden", "md:flex"];
    }
    return menuClass.join(" ");
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl">LOGO</Link>
        </div>

        <div className={mobileNav()}>
          
            <Link href="/resume" onClick={closeMenu} passHref className="text-white px-6 py-2 rounded-md text-sm font-medium">Resume</Link>
            <Link href="/hobbies" onClick={closeMenu} passHref className="text-white px-6 py-2 rounded-md text-sm font-medium">Hobbies</Link>
            <Link href="/mobile_apps" onClick={closeMenu} passHref className="text-white px-6 py-2 rounded-md text-sm font-medium">Mobile Apps</Link>
            <Link href="/webs" onClick={closeMenu} passHref className="text-white px-6 py-2 rounded-md text-sm font-medium">Webs</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              // Close icon when menu is open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger menu icon when menu is closed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;