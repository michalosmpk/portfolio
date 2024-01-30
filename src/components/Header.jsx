import { useState } from "react";
import "../scss/header.scss";
import logo from "../assets/logo.svg";

function Header() {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <>
      <div
        className={`Header__Mobile ${
          isHamburgerActive ? "Header__Mobile-isActive" : ""
        }`}
      >
        <nav className="Header__MobileNav">
          <ul>
            <a href="#AboutMe" onClick={handleHamburger}>
              <li>
                <span className="Header__MobileNavNumber">1.</span>
                <span className="Header__MobileNavText">About</span>
                <div className="Header__MobileNavDummy" />
              </li>
            </a>
            <div className="Header__MobileNavSeparator" />
            <a href="#MyWork" onClick={handleHamburger}>
              <li>
                <span className="Header__MobileNavNumber">2.</span>
                <span className="Header__MobileNavText">Work</span>
                <div className="Header__MobileNavDummy" />
              </li>
            </a>
            <div className="Header__MobileNavSeparator" />
            <a href="#Contact" onClick={handleHamburger}>
              <li>
                <span className="Header__MobileNavNumber">3.</span>
                <span className="Header__MobileNavText">Contact</span>
                <div className="Header__MobileNavDummy" />
              </li>
            </a>
          </ul>
        </nav>
      </div>
      <header className="Header">
        <img src={logo} className="Header__Logo" />
        <div className="Header__MobileButton">
          <button
            className={`hamburger hamburger--collapse ${
              isHamburgerActive ? "is-active" : ""
            }`}
            type="button"
            onClick={handleHamburger}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav className="Header__DesktopNav">
          <ul>
            <a href="#AboutMe">
              <li>
                <span className="Header__DesktopNavNumber">1. </span>
                About
              </li>
            </a>
            <div className="Header__DesktopNavSeparator" />
            <a href="#MyWork">
              <li>
                <span className="Header__DesktopNavNumber">2. </span>
                Work
              </li>
            </a>
            <div className="Header__DesktopNavSeparator" />
            <a href="#Contact">
              <li>
                <span className="Header__DesktopNavNumber">3. </span>
                Contact
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
