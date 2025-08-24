import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, title, image, category, price, addToCart }) => {
  return (
    <Link
      href={`/dashboard/products/${id}`}
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
      <button className="bg-purple-500 text-white font-medium h-10 cursor-pointer hover:opacity-80 rounded mt-3 w-full">
        {addToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </Link>
  );
};

export default ProductCard;
