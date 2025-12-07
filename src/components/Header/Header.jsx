import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (e) => {
    setIsMenuOpen(e.target.checked);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    // Также снимаем чекбокс
    const checkbox = document.getElementById('burger-checkbox');
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <input 
            type="checkbox" 
            id="burger-checkbox" 
            className="burger-checkbox"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <label 
            htmlFor="burger-checkbox" 
            className="burger"
            id="header__hamburger-btn"
            aria-label="Меню"
          >
            <img 
              src="/images/menu-hamburger.svg" 
              alt="Меню"
              className="burger-icon"
            />
          </label>
          <Link to="/" className="header-logo-link" onClick={handleMenuClose}>
            {!logoError ? (
              <img 
                src="/images/logo.png" 
                alt="УправДом" 
                className="header-logo"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="header-logo-text">УправДом</div>
            )}
          </Link>
          <button 
            className="header-cart-btn"
            aria-label="Корзина"
            onClick={() => {
              // Здесь будет логика открытия корзины
              console.log('Открыть корзину');
            }}
          >
            <img 
              src="/images/cart.svg" 
              alt="Корзина"
              className="cart-icon"
            />
          </button>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
};

export default Header;

