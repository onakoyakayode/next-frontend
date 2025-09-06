"use client";

import React from "react";
import { useCart } from "@/store/CartContext";
import Image from "next/image";
import { Trash } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, cartCount } = useCart();

  console.log(cart);
  return (
    <div className="p-5 flex justify-center items-center flex-col mt-4">
      <h1 className="text-2xl font-bold">Cart ({cartCount} items)</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-3 mt-4 shadow-md p-5">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border border-gray-200 p-3 rounded flex justify-between items-center gap-4"
              >
                <Image
                  src={item && item?.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-25 w-25 object-cover"
                />
                <div className="w-60 text-wrap">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="font-light text-sm">${item.price}</p>
                </div>

                <Trash
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 cursor-pointer"
                />
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="bg-gray-800 text-white px-4 py-2 rounded mt-5"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
