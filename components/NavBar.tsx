"use client";

import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={closeMenu}>
          AB
        </a>
        <nav id="nav" className={isOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#achievements" onClick={closeMenu}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <svg
            id="menuIcon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};
