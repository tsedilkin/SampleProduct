import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

const Menu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
      <div className="menu-overlay" onClick={onClose}></div>
      <div className="menu-content">
        <ul className="menu-list">
          <li className="menu-item">
            <Link 
              to="/" 
              className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Товар (с отзывами)
            </Link>
          </li>
          <li className="menu-item">
            <Link 
              to="/without-reviews" 
              className={`menu-link ${location.pathname === '/without-reviews' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Товар (без отзывов)
            </Link>
          </li>
          <li className="menu-item">
            <Link 
              to="/product-with-certificates" 
              className={`menu-link ${location.pathname === '/product-with-certificates' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Товар (с сертификатами)
            </Link>
          </li>
          <li className="menu-item">
            <Link 
              to="/certificates" 
              className={`menu-link ${location.pathname === '/certificates' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Сертификаты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

