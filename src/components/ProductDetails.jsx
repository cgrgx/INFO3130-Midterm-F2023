import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-5 bg-white shadow-lg rounded-lg">
      <div className="flex sm:flex-row flex-col">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="max-w-3xl sm:w-1/2 md:w-2/3 lg:w-3/4 h-auto mb-5 sm:mb-0 sm:mr-5 rounded shadow"
        />
        <div className=" flex-1 sm:ml-5">
          <h2 className="text-2xl lg:text-5xl font-bold mb-4">
            {product.name}
          </h2>
          <p className="mb-2 font-semibold lg:text-4xl">
            Price: ${product.price}
          </p>

          {/* Dropdown for Sizes */}
          <label className="block text-sm font-medium mb-2 lg:text-4xl">
            Size:
          </label>
          <select className="mb-4 p-2 w-full border rounded">
            {product.sizes.map((size, idx) => (
              <option key={idx} value={size}>
                {size}
              </option>
            ))}
          </select>

          {/* Dropdown for Quantity */}
          <label className="block text-sm font-medium mb-2 lg:text-4xl">
            Quantity:
          </label>
          <select className="mb-4 p-2 w-full border rounded">
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>

          {/* Add to Cart Button */}
          <button className="mb-4 w-full bg-blue-950 hover:bg-blue-700 text-white p-2 rounded transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
      <p className="mt-5 text-gray-700">
        <span className="font-bold">Product Details:</span>{" "}
        {product.details || "No product description provided."}
      </p>
    </div>
  );
}

export default ProductDetail;
