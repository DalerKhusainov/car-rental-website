"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Vehicle Models", path: "/vehicle-models" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Our Team", path: "/our-team" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="max-w-[1248px] z-50 mx-auto">
      <nav className="flex items-center justify-between h-[100px]">
        <div>
          <Link href={"/"}>
            <Image src="/images/logo/logo.png" alt="" width={90} height={70} />
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Links {...link} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-8">
          <Link
            href="/sign-in"
            className={`${
              pathname === "sign-in"
                ? "text-primary-200"
                : "text-textBlack"
            } text-xs font-bold font-rubik hover:text-primary-200 transition-all duration-300`}
          >
            Sign In
          </Link>
          <Link href="/register">
          <Button>Register</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Links({ name, path }: { name: string; path: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${
        pathname === path
          ? "text-primary-200"
          : "text-textBlack"
      } text-xs font-semibold font-rubik pb-1 hover:text-primary-200 transition-all duration-300`}
    >
      {name}
    </Link>
  );
}
