"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let classesAnimacao = "";

  if (isMenuOpen === true) {
    classesAnimacao =
      "opacity-100 translate-x-0 max-h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-md pointer-events-auto";
  } else {
    classesAnimacao =
      "opacity-0 -translate-x-5 max-h-0 pointer-events-none rounded-md border border-white/20";
  }

  const links = routes
    .filter((route) => route.href !== pathname)
    .map((route) => (
      <Link
        key={route.href}
        href={route.href}
        className="text-white text-lg px-4 block hover:scale-110 transition-transform"
      >
        {route.label}
      </Link>
    ));

  return (
    <>
      <div className="fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          className="bg-[url('/image/imgNav.png')] bg-cover bg-center w-[45px] h-[45px] hover:scale-110 active:scale-95 transition-transform"
        ></button>

        <div className="absolute top-[50px] right-0 overflow-hidden">
          <nav
            className={
              "flex flex-col space-y-2 pb-3 text-right transition-all duration-500 ease-in-out " +
              classesAnimacao
            }
          >
            {links}
          </nav>
        </div>
      </div>
    </>
  );
}
