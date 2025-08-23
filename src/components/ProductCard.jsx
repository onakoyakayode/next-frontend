import Image from "next/image";
import React from "react";

const ProductCard = ({ title, image, category, price, addToCart }) => {
  return (
    <div className="border border-gray-200 bg-white shadow-xl hover:shadow-2xl rounded py-5 p-3 flex flex-col items-center">
      <div>
        <Image src={image} width={300} height={300} alt="product" />
        <h2 className="font-semibold h-13">{title}</h2>
        <p className="mb-2">
          Category: <span className="text-gray-400">{category}</span>
        </p>
        <p>Price: ₦{price}</p>
        <button className="bg-purple-500 text-white font-medium h-10 cursor-pointer hover:opacity-80 rounded mt-3 w-full">
          {addToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
