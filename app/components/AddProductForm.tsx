"use client";

import React, { useState } from "react";
import { addProduct } from "../actions/addProducts/addProduct";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState(""); // Initialize the message state
  const router = useRouter(); // Initialize the router

  const handleSubmit = async () => {
    setMessage("Adding Product..."); // Show a loading message while the product is being added
    try {
      const result = await addProduct(name, price); // Call the addProduct function
      setMessage(`Product added: ${result.name}, Price: ${result.price}`); // Update the message with success info
      
    } catch (error) {
      setMessage(`Error:`); // Update the message with an error message
    }
    
  };
  router.push('/auth/addproduct');
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-3xl block text-gray-700 font-bold">Add Product</h1>
          <label className="block text-gray-700 text-sm font-bold">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-gray-700 text-sm font-bold">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <button
            onClick={handleSubmit}
            className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>

          <p>{message}</p> {/* Display the message */}
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
