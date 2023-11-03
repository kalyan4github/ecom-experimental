import { GetStaticProps } from "next";
import React from "react";
import { getAllProducts } from "../actions/addProducts/addProduct";

async function ProductsList() {
  const product = getAllProducts();

  return (
    <div className=" py-7 px-10">
      <h2 className="text-3xl block text-gray-700  font-bold">Products</h2>
      <div className="row">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {(await product).map((product) => (
            <div className="border rounded-lg p-4 m-4" key={product.id}>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
