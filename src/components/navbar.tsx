"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let classesAnimacao = "";

  if (isMenuOpen === true) {
    classesAnimacao = "opacity-100 translate-x-0 max-h-40";
  } else {
    classesAnimacao = "opacity-0 -translate-x-5 max-h-0 pointer-events-none";
  }

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
  ];

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
      <div className="relative flex justify-end mr-5">
        <button
          onClick={toggleMenu}
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

            <a></a>
          </nav>
        </div>
      </div>
    </>
  );
}
