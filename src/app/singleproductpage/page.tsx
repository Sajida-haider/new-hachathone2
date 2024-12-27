"use client";

import { useState } from "react";
import Sidebar from "@/app/components/cartsidebar"; // Import Sidebar component
import Image from "next/image";

const SingleProductPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

  const handleAddToCart = () => {
    setSidebarOpen(true); // Open sidebar when Add to Cart is clicked
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false); // Close sidebar when Close button in sidebar is clicked
  };

  return (
    <div>
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart} // Trigger sidebar open when clicked
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Content Section */}
      <div className="flex justify-between items-center w-full h-auto bg-[#FFF9E5] px-20">
        {/* Left Section */}
        <div className="flex flex-col items-center w-full max-w-[900px]">
          <Image
            src="/Asghersofa.jpg"
            alt="Left Image"
            className="object-cover"
            width={500}
            height={300}
          />
        </div>

        {/* Right Image */}
        <Image
          src="/Asghertext.jpg"
          alt="Right Image"
          className="object-cover"
          width={331}
          height={108}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
