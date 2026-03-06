"use client";

import { useState } from "react";
import { Hamburger } from "./Hamburger";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/k-portfolio/about", label: "About me" },
    { href: "/k-portfolio/skills", label: "Skills" },
    { href: "/k-portfolio/research", label: "Research" },
    { href: "/k-portfolio/links", label: "Links" },
  ];

  return (
    <>
      <div className="flex items-center justify-between shadow h-20 bg-gray-200">
        <h1 className="ml-5 text-2xl font-bold">KENNOSUKE</h1>

        <nav className="hidden md:flex gap-8 text-lg font-semibold m-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Hamburger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)} // 背景クリックで閉じる
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <nav
        className={`fixed inset-y-0 left-0 w-3/5 bg-white shadow-xl z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
};
