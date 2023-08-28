import React from "react";
import "../styles/home.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="forter">
      <span>Copyright &copy;{today.getFullYear()} All rights reserved</span>
      <br />
      <span>All rights reserved | Cookies policy</span>
    </footer>
  );
};

export default Footer;
