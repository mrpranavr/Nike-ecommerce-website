"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light-100 border-b border-light-300">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Nike home">
          <Image
            src="/logo.svg"
            alt="Nike"
            width={80}
            height={29}
            className="invert"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/search"
            className="text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
          >
            Search
          </Link>
          <Link
            href="/cart"
            className="text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
          >
            My Cart (2)
          </Link>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-dark-900 transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark-900 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark-900 transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 border-t border-light-300" : "max-h-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block py-2 text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-light-300 mt-2 pt-3">
            <Link
              href="/search"
              className="block py-2 text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="block py-2 text-body-medium text-dark-900 hover:text-dark-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Cart (2)
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
