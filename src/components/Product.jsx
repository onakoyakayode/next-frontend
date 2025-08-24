"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 py-5">
        {loading ? (
          <h1 className="text-3xl text-green-800">loading....</h1>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          data?.map((cart) => (
            <li key={cart.id}>
              <ProductCard
                id={cart.id}
                image={cart.thumbnail}
                title={cart.title}
                price={cart.price}
                category={cart.category}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Product;
