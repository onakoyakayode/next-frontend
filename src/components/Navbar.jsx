import Link from "next/link";
import React from "react";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-25 h-20 w-full bg-gray-100 shadow-md">
      <h1 className="text-orange-400 text-4xl font-bold">StudBridge</h1>
      <ul className="flex items-center justify-normal gap-10">
        {navlinks.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-blue-700">
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
