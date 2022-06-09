import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 bg-dark text-white text-center position-relative">
      <div className="container">
        <p>Copyright &copy; Team Scrums Up 2022</p>
        <p>
          Images courtesy
          <a href="https://www.ikea.com/" className="link">
            IKEA
          </a>
        </p>
        <p>Used for educational purpose</p>
      </div>
    </footer>
  );
};

export default Footer;
