"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Talleres", href: "/talleres" },
  { label: "Fiestas", href: "/fiestas" },
  { label: "Pizzas", href: "/pizzas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-accent font-extrabold text-2xl tracking-tight">
              Pizza-Yo
            </span>
            <span className="hidden sm:inline text-white/80 text-sm font-medium italic">
              Pizza? Yo!!!
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-semibold text-white rounded-md
                           transition-colors duration-200
                           hover:bg-white/10 hover:text-accent
                           focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md
                       text-white hover:text-accent hover:bg-white/10
                       focus:outline-none focus:ring-2 focus:ring-accent
                       transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
          >
            {/* Hamburger / X icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-primary border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-white rounded-md
                         transition-colors duration-200
                         hover:bg-white/10 hover:text-accent
                         focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
