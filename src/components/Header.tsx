"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "車款",
    children: [
      { label: "VARG MX 1.2", href: "/products/stark-varg" },
      { label: "VARG EX", href: "/products/stark-varg-ex" },
      { label: "VARG SM", href: "/products/stark-varg-sm" },
    ],
  },
  { label: "關於 Stark", href: "/about" },
  { label: "聯繫我們", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/common/new_logo.png"
            alt="Stark Future"
            width={120}
            height={30}
            className="h-7 w-auto"
          />
          <span className="text-xs text-white/60 border-l border-white/20 pl-3">台灣</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setHoveredMenu(link.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="text-sm text-white/80 hover:text-white transition-colors">
                  {link.label}
                </button>
                {hoveredMenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg py-2 min-w-[180px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="text-xs text-white/40 uppercase mb-2">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-white/80 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="block py-2 text-white/80 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
