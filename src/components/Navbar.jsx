"use client";

import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/content", label: "Content" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          JENOGECHI
        </a>

        <nav className="nav-links">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar-hamburger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      <div
        className={`navbar-mobile-menu ${isMenuOpen ? "navbar-mobile-menu--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="navbar-mobile-nav">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
