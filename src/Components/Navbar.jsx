import React, { useState, useEffect, useRef } from "react";

import "./apppp"

import "./Navbar.css"; // Import your styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    products: false,
    insights: false,
    trainings: false,
  });

  const menuRef = useRef(null);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle dropdowns
  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdowns({ products: false, insights: false, trainings: false });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={() => toggleDropdown("products")}>
            Products
          </a>
          {dropdowns.products && <div className="dropdown-menu">Products Menu</div>}
        </li>

        <li>
          <a href="#" onClick={() => toggleDropdown("insights")}>
            Insights
          </a>
          {dropdowns.insights && <div className="dropdown-menu">Insights Menu</div>}
        </li>

        <li>
          <a href="#" onClick={() => toggleDropdown("trainings")}>
            Trainings
          </a>
          {dropdowns.trainings && <div className="dropdown-menu">Trainings Menu</div>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
