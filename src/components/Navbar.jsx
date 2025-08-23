import { CircleUser, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const navlinks = [
  { name: "Home", href: "/dashboard" },
  { name: "About", href: "/dashboard/about" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-25 h-20 w-full bg-gray-100 shadow-md">
      <h1 className="text-orange-400 text-4xl font-bold">StudBridge</h1>
      <ul className="flex items-center justify-normal gap-20">
        {navlinks.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-blue-700">
            {link.name}
          </Link>
        ))}
      </ul>
      <ul className="flex justify-normal items-center gap-5">
        <CircleUser />
        <ShoppingBag />
      </ul>
    </nav>
  );
};

export default Navbar;
