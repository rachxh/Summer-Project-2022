import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3 className="logo"><Link to="/">PlantCare 🪴 </Link></h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Catalogue</Link>
          </li>
          <li>
            <Link to="/myPlants">My plants</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
