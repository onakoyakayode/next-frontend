"use client";

import React from "react";
import { useCart } from "@/store/CartContext";
import Image from "next/image";
import { Trash } from "lucide-react";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    cartCount,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  console.log(cart);
  return (
    <div className="min-h-[80vh] p-5 flex justify-start items-center flex-col mt-4">
      <h1 className="text-2xl font-bold">Cart ({cartCount} items)</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4 mt-4 shadow-md p-5">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border border-gray-300 p-3 rounded flex justify-between items-center gap-4"
              >
                <Image
                  src={item && item?.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-25 w-25 object-cover"
                />
                <div className="w-60 text-wrap">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="font-light text-sm">₦{item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-2 rounded"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <Trash
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 cursor-pointer w-4 h-4"
                />
              </li>
            ))}
            <div className="mt-10 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Total: ₦{totalPrice.toFixed(2)}
              </h2>
              <button
                onClick={clearCart}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default CartPage;
