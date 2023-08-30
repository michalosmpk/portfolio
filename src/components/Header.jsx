import '../scss/header.scss';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="Header">
      <img src={ logo } className="Header__Logo" />
      <nav className="Header__DesktopNav">
        <ul>
          <li>
            <span className="Header__DesktopNavNumber">1. </span>
            About
          </li>
          <div className="Header__DesktopNavSeparator" />
          <li>
            <span className="Header__DesktopNavNumber">2. </span>
            Work
          </li>
          <div className="Header__DesktopNavSeparator" />
          <li>
            <span className="Header__DesktopNavNumber">3. </span>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;