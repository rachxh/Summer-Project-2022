import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container">
     <Link to="/" className="nav-brand" >PlantCare 🪴 </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navMenu"><span className="navbar-toggler-icon"></span></button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Catalogue</Link>
          </li>
          {/* <li>
            <Link to="/myPlants">My plants</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/aboutUs" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item" >
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
  );
};

export default Header;
