// ParentComponent.tsx
"use client"; 
import { useState } from "react";
import Cartsidebar from "@/app/components/cartsidebar"; // Import Sidebar component

const ParentComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Button to open sidebar */}
      <button onClick={toggleSidebar}>Open Sidebar</button>
      
      {/* Pass isOpen and onClose props to Sidebar */}
      <Cartsidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default ParentComponent;
