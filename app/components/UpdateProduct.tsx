"use client";
import { useState } from "react";
import { updateProduct } from "../actions/addProducts/addProduct";

const UpdateProductForm = () => {
    const [productId, setProductId] = useState(''); // Input for the product ID
    const [updatedName, setUpdatedName] = useState(''); // Input for the updated product name
    const [updatedPrice, setUpdatedPrice] = useState(''); // Input for the updated product price
    const [message, setMessage] = useState(''); // Initialize the message state
    const productIdNumber = parseInt(productId, 10); // Use base 10
    const handleUpdate = async () => {
      setMessage('Updating Product...');
  
      try {
        const updatedProduct = await updateProduct(productIdNumber, updatedName, updatedPrice);
        setMessage(`Product updated: ${updatedProduct.name}, Price: ${updatedProduct.price}`);
      } catch (error) {
        setMessage(`Error: `);
      }
    };
  
    return (
      <div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 p-4">
            <h1 className="text-3xl block text-gray-700 font-bold">Update Product</h1>
            <label className="block text-gray-700 text-sm font-bold">Product ID</label>
            <input
              type="number"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold">Updated Product Name</label>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold">Updated Price</label>
            <input
              type="text"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
  
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Product
            </button>
  
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  };
export default UpdateProductForm;  