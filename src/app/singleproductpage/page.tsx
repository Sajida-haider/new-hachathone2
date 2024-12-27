"use client";

import React, { useState } from "react";
import Cartsidebar from "@/app/components/cartsidebar"; // Ensure the correct path to your component
import Productdescription from "@/app/components/productdescription"; // Ensure the correct path
import Image from "next/image";

const ProductDetails = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar Open/Close
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Product Details Section */}
      <div className="product-details flex justify-center items-start gap-10 p-10">
        {/* Left Section */}
        <div className="flex items-start gap-6">
          <Image
            src="/images/asghersofa2.jpg"
            alt="Selected Product"
            width={500}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="details flex flex-col gap-6 max-w-md">
          <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
          <p className="text-lg text-gray-600">Rs. 250,000.00</p>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">★★★★☆</div>
            <p className="text-gray-600">(5 Customer Reviews)</p>
          </div>
          <p className="text-gray-700">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero.
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={toggleSidebar}
            className="bg-blue-100 text-black px-4 py-2 rounded-lg hover:bg-blue-200 transition-all duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-10">
        <Productdescription />
      </div>

      {/* Sidebar */}
      <Cartsidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default ProductDetails;
