import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[90vh] container mx-auto px-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
