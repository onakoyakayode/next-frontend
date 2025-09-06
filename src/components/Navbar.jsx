"use client";

import { useCart } from "@/store/CartContext";
import { CircleUser, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const navlinks = [
  { name: "Home", href: "/dashboard" },
  { name: "About", href: "/dashboard/about" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const router = useRouter();
  const { cartCount } = useCart();

  return (
    <nav className="flex justify-between items-center px-25 h-20 w-full bg-white shadow-md">
      <h1 className="text-orange-400 text-3xl font-bold">StudBridge</h1>
      <ul className="flex items-center justify-normal gap-20">
        {navlinks.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-black">
            {link.name}
          </Link>
        ))}
      </ul>
      <ul className="flex justify-normal items-center gap-5">
        <CircleUser />
        <div
          className="relative"
          onClick={() => router.push("/dashboard/cart")}
        >
          <ShoppingBag />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
