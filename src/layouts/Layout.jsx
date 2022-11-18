import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
