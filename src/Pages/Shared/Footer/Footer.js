import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p className="text-center">Copyright @ {year}</p>
    </footer>
  );
};

export default Footer;
