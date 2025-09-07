import React from "react";
import ProductCard from "./ProductCard";
import Product from "./Product";

const NewArrivals = () => {
  return (
    <div className="md:py-20 xl:py-25 md:px-30 xl:px-50">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-semibold mb-3 animate-pulse">
            New Arrivals
          </h1>
          <p>
            Be the first to wear this season’s latest looks. Handpicked and
            freshly styled.
          </p>
        </div>
        <button className="border border-[#ef233c] font-light text-[#ef233c] rounded-3xl py-3 px-5 uppercase hover:bg-[#ef233c] hover:text-white cursor-pointer">
          See what's new
        </button>
      </div>
      <Product />
    </div>
  );
};

export default NewArrivals;
