"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-between px-[8vw] xl:px-[10vw] pt-7 pb-6">
        {/* Left links */}
        <div className="flex items-center gap-12">
          <Link href="/products/stark-varg-ex" className="text-base text-white hover:text-white/70 tracking-[0.3em] uppercase font-normal transition-colors">
            EX
          </Link>
          <Link href="/products/stark-varg" className="text-base text-white hover:text-white/70 tracking-[0.3em] uppercase font-normal transition-colors">
            MX 1.2
          </Link>
          <Link href="/products/stark-varg-sm" className="text-base text-white hover:text-white/70 tracking-[0.3em] uppercase font-normal transition-colors">
            SM
          </Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/common/new_logo.png"
            alt="Stark Future"
            width={44}
            height={44}
            className="h-11 w-auto"
          />
        </Link>

        {/* Right links */}
        <div className="flex items-center gap-12">
          <Link href="/about" className="text-base text-white hover:text-white/70 tracking-[0.3em] uppercase font-normal transition-colors">
            關於
          </Link>
          <Link href="/contact" className="text-base text-white hover:text-white/70 tracking-[0.3em] uppercase font-normal transition-colors">
            聯繫
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4 bg-gradient-to-b from-black/50 to-transparent">
        <Link href="/">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/common/new_logo.png"
            alt="Stark Future"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <button
          className="text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-40">
          <div className="flex justify-end p-5">
            <button className="text-white" onClick={() => setMenuOpen(false)}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-16">
            {[
              { label: "EX", href: "/products/stark-varg-ex" },
              { label: "MX 1.2", href: "/products/stark-varg" },
              { label: "SM", href: "/products/stark-varg-sm" },
              { label: "關於", href: "/about" },
              { label: "聯繫我們", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl text-white/80 hover:text-white tracking-[0.2em] uppercase font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
