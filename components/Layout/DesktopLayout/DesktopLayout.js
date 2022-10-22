import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const DesktopLayout = ({ children, navbarTheme }) => {
  return (
    <div className="bg-white">
      <Navbar theme={navbarTheme} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DesktopLayout;
