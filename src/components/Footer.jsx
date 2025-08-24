import { Chromium, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  const shopLinks = [
    {
      name: "Mens Wear",
      href: "/",
    },
    {
      name: "Womens Wear",
      href: "/",
    },
    {
      name: "Kids Wear",
      href: "/",
    },
    {
      name: "Accessories",
      href: "/",
    },
  ];

  const helpLinks = [
    {
      name: "FAQ",
      href: "/",
    },
    {
      name: "Return Policy",
      href: "/",
    },
    {
      name: "Order status",
      href: "/",
    },
    {
      name: "Shipping & Delivery",
      href: "/",
    },
  ];

  return (
    <div className="bg-black py-10 px-5 lg:py-20 lg:px-25 text-white grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 w-full">
      <div className="col-span-1 lg:col-span-2 w-full">
        <div className="flex justify-normal items-center gap-3">
          <Chromium className="h-10 w-10 text-red-500" />
          <h1 className="text-3xl font-bold">SudBridge Collections</h1>
        </div>
        <p className="mt-5">Classic looks for Men, Women & Kids.</p>
        <div className="flex justify-normal items-center gap-5 mt-10">
          <Instagram className="w-5 h-5 hover:text-[#ef233c]" />
          <Facebook className="w-5 h-5 hover:text-[#ef233c]" />
          <Linkedin className="w-5 h-5 hover:text-[#ef233c]" />
          <Twitter className="w-5 h-5 hover:text-[#ef233c]" />
        </div>
      </div>
      <div className="col-span-1 w-full">
        <h3 className="mb-10 text-center font-bold">Quick Links</h3>
        <ul className="flex flex-col items-center">
          {quickLinks.map((quick, idx) => (
            <li key={idx} className=" pb-5">
              <Link className="hover:text-[#ef233c]" href={quick.href}>
                {quick.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 w-full">
        <h3 className="mb-10 text-center font-bold">Shop</h3>
        <ul className="flex flex-col items-center">
          {shopLinks.map((quick, idx) => (
            <li key={idx} className=" pb-5">
              <Link className="hover:text-[#ef233c]" href={quick.href}>
                {quick.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 w-full">
        <h3 className="mb-10 text-center font-bold">Help</h3>
        <ul className="flex flex-col items-center">
          {helpLinks.map((quick, idx) => (
            <li key={idx} className=" pb-5">
              <Link className="hover:text-[#ef233c]" href={quick.href}>
                {quick.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 w-full">
        {" "}
        <h3>My Profile</h3>
      </div>
    </div>
  );
};

export default Footer;
