import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
