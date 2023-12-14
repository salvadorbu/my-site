import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function loadSquares(n) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    squares.push(<li key={i}></li>);
  }
  return squares;
}

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const NUM_SQUARES = 10;

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="area">
        <ul className="circles">{loadSquares(NUM_SQUARES)}</ul>
      </div>
      <header className="relative font-bungee h-screen">
        <div className="absolute top-0 right-0 p-4 z-10">
          <button
            className="text-5xl text-periwinkle hover:text-sky-600 font-bold py-2 px-4 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-2 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
            >
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
        {children}
      </header>
    </>
  );
};

export default Layout;
