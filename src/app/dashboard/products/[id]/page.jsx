"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, use } from "react";

const ProductDetails = ({ params }) => {
  const { id } = use(params);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) fetchProductDetails();
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen px-25 py-10 flex items-center justify-center">
      <div className="border border-gray-300 w-1/3 flex flex-col items-center px-5 py-10 h-auto">
        <Image
          src={productData?.thumbnail}
          alt={productData?.title}
          width={700}
          height={700}
          className="object-cover w-1/3 h-auto mb-5"
        />
        <h4 className="text-3xl font-bold mb-2">{productData.title}</h4>
        <p className="text-base text-center font-medium mb-5">
          {productData?.description}
        </p>
        <p className="font-semibold">
          Percentage Discount:
          <span className="font-normal">{productData.discountPercentage}</span>
        </p>
        <p className="font-semibold">Stock: {productData?.stock}</p>
        <p>Rating: {productData.rating}</p>
        <p>Brand: {productData?.brand}</p>
        <p>Warranty: {productData.warrantyInformation}</p>
        <small>Return Policy: {productData.returnPolicy}</small>
        <button className="mt-10 bg-purple-700 text-white w-full h-11 rounded font-semibold cursor-pointer hover:opacity-75">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
