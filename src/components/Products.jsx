"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="min-h-screen">
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-5">
        {data &&
          data?.map((cart) => (
            <li key={cart.id}>
              <ProductCard
                image={cart.thumbnail}
                title={cart.title}
                price={cart.price}
                category={cart.category}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
