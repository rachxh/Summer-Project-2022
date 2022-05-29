import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 bg-dark text-white text-center position-relative">
      <div className="container">
      <p>copyright&copy; Team Scrums Up 2022</p>
      <a href="#" className="position-absolute bottom-0 end-0 p-5"> 
      <i className="bi bi-arrow-up-circle h1"></i>
      </a>
      </div>
      
    </footer>
  );
};

export default Footer;