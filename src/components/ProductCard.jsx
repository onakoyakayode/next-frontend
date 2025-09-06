import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/store/CartContext";

const ProductCard = ({ id, title, image, category, price }) => {
  const { addToCart, cart } = useCart();

  const isInCart = cart.some((item) => item.id === id);

  return (
    <div
      // href={`/dashboard/products/${id}`}
      className="border border-gray-200 bg-white shadow-xl cursor-pointer hover:shadow-2xl rounded py-5 p-3 flex flex-col items-start"
    >
      <Image
        src={image}
        width={300}
        height={300}
        alt="product"
        className="self-center"
      />
      <h2 className="font-semibold h-13">{title}</h2>
      <p className="mb-2">
        Category: <span className="text-gray-400">{category}</span>
      </p>
      <p>Price: ₦{price}</p>
      <button
        onClick={() => addToCart({ id, title, image, price, category })}
        className="bg-purple-500 text-white font-medium h-10 cursor-pointer hover:opacity-80 rounded mt-3 w-full"
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
