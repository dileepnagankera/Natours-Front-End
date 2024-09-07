import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
import Header from "../Headers/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
