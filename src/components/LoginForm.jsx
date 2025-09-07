"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const testUser = {
    email: "sodbridge@gmail.com",
    password: "123456",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (
      formData.email !== testUser.email ||
      formData.password !== testUser.password
    ) {
      setError("Invalid credentials");
      return;
    }

    if (
      formData.email === testUser.email &&
      formData.password === testUser.password
    ) {
      alert("Login successful");
      setError("");

      router.push("/dashboard");
      setFormData({ email: "", password: "" });
      return;
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="py-5 px-3 w-[400px] h-auto shadow-lg flex flex-col">
        <h2 className="self-center text-2xl font-medium mb-5">Login</h2>
        {error && <p className="text-red-600 bg-red-300 mb-2 p-2">{error}</p>}
        <form className="flex flex-col p-5 gap-3 ">
          <div className="flex flex-col">
            <label className="mb-1">Email:</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 h-10 px-2 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Password:</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 h-10 px-2 rounded"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-medium h-10 cursor-pointer hover:opacity-80 rounded mt-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
