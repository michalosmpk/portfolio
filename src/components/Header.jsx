import '../scss/header.scss';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="Header">
		<img src={ logo } className="Header__Logo" />
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
  );
}

export default Header;