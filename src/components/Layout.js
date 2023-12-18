import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import resume from "../assets/resume.pdf";

function loadSquares(n) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    squares.push(<li key={i}></li>);
  }
  return squares;
}

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownloadIcon, setShowDownloadIcon] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const menuRef = useRef();
  const location = useLocation();
  const NUM_SQUARES = 10;

  const closeMenu = () => setIsMenuOpen(false);

  const updateHeight = () => {
    setTimeout(() => {
      const height = document.body.scrollHeight - 1;
      setPageHeight(height);
    }, 100);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateHeight);
    };
  }, [location, menuRef]);

  return (
    <>
      <div className="area">
        <ul className="squares" style={{ height: `${pageHeight}px` }}>
          {loadSquares(NUM_SQUARES)}
        </ul>
      </div>
      <header className="relative font-bungee h-screen">
        <div className="absolute top-0 right-0 p-4 z-10">
          <button
            className="text-5xl text-periwinkle hover:text-sky-600 font-bold py-2 px-4 rounded sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>
          <button
            className="hidden sm:block text-5xl text-periwinkle hover:text-sky-600 font-bold py-2 px-4 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-2 mt-2 py-2 w-48 bg-periwinkle rounded-lg shadow-xl"
            >
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-800 hover:bg-amber-600"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-4 py-2 text-gray-800 hover:bg-amber-600"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <a
                href={resume}
                download="resume.pdf"
                onMouseEnter={() => setShowDownloadIcon(true)}
                onMouseLeave={() => setShowDownloadIcon(false)}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-amber-600"
              >
                Resume
                {showDownloadIcon && (
                  <FontAwesomeIcon icon={faDownload} className="ml-2" />
                )}
              </a>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-800 hover:bg-amber-600"
                onClick={closeMenu}
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
