"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";
import ContactForm from "./ContactForm";

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 py-4 text-white bg-gray-950 z-50 shadow-sm border-b-2 border-gray-900 px-6 md:px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={30}
            className="-hue-rotate-45 contrast-125 saturate-150"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 overflow-visible bg-cyan-500 text-gray-900 hover:bg-cyan-600"
          >
            <span className="relative z-10">Let's talk</span>
          </button>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {contactOpen && (
        <ContactForm onClose={() => setContactOpen(false)} />
      )}
    </nav>
  );
}