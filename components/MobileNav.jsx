"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import logo from "/public/logo.png";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
];

const MobileNav = ({ onContactClick }) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue-500" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              dev
              <span className="text-cyan-500">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-cyan-500 border-b-2 border-cyan-500"
                } capitalize font-medium hover:text-cyan-400 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Let's Talk */}
          <button
            type="button"
            onClick={onContactClick}
            className="px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-full hover:bg-cyan-600 transition-all duration-300"
          >
            Let's talk
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;