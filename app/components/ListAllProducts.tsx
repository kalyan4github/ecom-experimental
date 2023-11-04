import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { getAllProducts,deleteProduct  } from "../actions/addProducts/addProduct";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const ProductsList = () => {
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products when the component mounts
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold my-4">List of Products</h2>
        <table className="min-w-full rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 ">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Update</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2 hover:cursor-pointer">
                  <Link href={`/updateProduct?id=${product.id}`}>
                    <BsPencilSquare className="h-6 w-6 text-blue-700" />
                  </Link>
                </td>
                <td className="px-4 py-2 hover:cursor-pointer">
                  <Link href={`/deleteProduct?id=${product.id}`}>
                    <AiFillDelete className="h-6 w-6 text-red-700" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
