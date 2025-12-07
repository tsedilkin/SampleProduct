import { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ productData, onShowSizeChart, selectedColor, onColorChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const isSizeAvailable = (size) => {
    return productData.availableSizes.includes(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }
    // Здесь будет логика добавления в корзину
    console.log('Добавить в корзину:', { size: selectedSize, color: selectedColor });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="product-info">
      <h1 className="product-title">{productData.name}</h1>
      
      <div className="product-info-content">
        <div className="product-info-left">
          <div className="product-options">
            <div className="option-group">
              <label className="option-label">Цвет: {productData.colors.find(c => c.value === selectedColor)?.name}</label>
              <div className="color-options">
                {productData.colors.map((color) => (
                  <button
                    key={color.value}
                    className={`color-option ${selectedColor === color.value ? 'active' : ''}`}
                    onClick={() => onColorChange && onColorChange(color.value)}
                    aria-label={color.name}
                    title={color.name}
                  >
                    {color.image ? (
                      <img 
                        src={color.image} 
                        alt={color.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = color.value;
                        }}
                      />
                    ) : (
                      <span style={{ backgroundColor: color.value }}></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label className="option-label">Размер:</label>
              <div className="size-options">
                {productData.sizes.map((size) => {
                  const available = isSizeAvailable(size);
                  return (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''} ${!available ? 'unavailable' : ''}`}
                      onClick={() => available && setSelectedSize(size)}
                      disabled={!available}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
              {selectedSize && !isSizeAvailable(selectedSize) && (
                <div className="preorder-notice">
                  Так вышло, что выбранного вами размера нет в наличии.
                  <br />
                  Но мы осуществляем мечты — и для вас он доступен для предзаказа! Примерное время ожидания — не более 14 дней. Точные сроки вам сообщит менеджер, когда свяжется с вами для подтверждения заказа.
                  <br />
                  Спасибо, что мы нужны вам.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="product-info-right">
          <div className="product-price">
            <span className="price-value">{formatPrice(productData.price)} {productData.currency}</span>
          </div>

          <div className="product-actions">
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              В корзину
            </button>
            <button className="btn-checkout">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

