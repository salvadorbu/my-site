import "./App.css";
import profilePhoto from "./assets/profilepicture.jpg";
import React, { useState } from "react";

function loadSquares(n) {
  const squares = [];
  for (let i = 0; i < n; i++) {
    squares.push(<li key={i}></li>);
  }
  return squares;
}

function App() {
  const NUM_SQUARES = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="area">
        <ul className="circles">{loadSquares(NUM_SQUARES)}</ul>
      </div>
      <header className="relative font-bungee h-screen">
        <div className="absolute top-0 right-0 p-4">
          <button
            className="text-5xl text-periwinkle hover:text-sky-600 font-bold py-2 px-4 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <a
                href="/projects"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-7xl mr-2">Salvador Buenadicha</span> {}
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-full w-42 h-42 object-cover"
          />
        </div>
      </header>
    </>
  );
}

export default App;
