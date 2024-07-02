import React from "react";
import Header from "./_components/Header";
import { Footer } from "../page";

function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36 ">
      {children}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
