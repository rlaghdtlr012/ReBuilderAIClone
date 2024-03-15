import { Link } from 'react-router-dom';
import MultiLanguage from './MultiLanguage';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Logo
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/technology" className="nav-link">
            Technology
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <MultiLanguage />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
