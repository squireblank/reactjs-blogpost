import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header>
      <h1>ReactJS Blog</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 1200 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
