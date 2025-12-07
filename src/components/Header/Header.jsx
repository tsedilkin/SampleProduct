import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <input 
          type="checkbox" 
          id="burger-checkbox" 
          className="burger-checkbox"
          checked={isMenuOpen}
          onChange={(e) => setIsMenuOpen(e.target.checked)}
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
  );
};

export default Header;

