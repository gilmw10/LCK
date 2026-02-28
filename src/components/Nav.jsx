import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">LCK</div>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link className="menu" to="/" onClick={closeMenu}>
            MAIN
          </Link>
          <Link className="menu" to="/about" onClick={closeMenu}>
            ABOUT
          </Link>
          <Link className="menu" to="/team" onClick={closeMenu}>
            TEAM
          </Link>
          <Link className="menu" to="/sponsor" onClick={closeMenu}>
            SPONSOR
          </Link>
          <Link className="menu" to="/other" onClick={closeMenu}>
            OTHER LEAGUE
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;