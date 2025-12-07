import { useState, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipe = (startX, endX) => {
    const distance = startX - endX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Свайп влево - следующее изображение
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Свайп вправо - предыдущее изображение
      goToPrevious();
    }
  };

  // Touch события (мобильные устройства)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    handleSwipe(touchStartX.current, touchEndX.current);

    // Сброс значений
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse события (десктоп)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    
    if (touchStartX.current && touchEndX.current) {
      handleSwipe(touchStartX.current, touchEndX.current);
    }

    // Сброс значений
    isDragging.current = false;
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      touchStartX.current = 0;
      touchEndX.current = 0;
    }
  };

  return (
    <div className="product__slider-wrapper">
      <div className="product__slider-main">
        <button 
          className="product__slider-nav product__slider-nav-prev" 
          onClick={goToPrevious}
          aria-label="Предыдущее изображение"
        >
          ‹
        </button>
        <div 
          className="product__slider-image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Изображение ${currentIndex + 1}`}
            className="product__slider-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x1000?text=Image+' + (currentIndex + 1);
            }}
          />
          <div className="product__slider-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`product__slider-indicator ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Изображение ${index + 1} из ${images.length}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
        <button 
          className="product__slider-nav product__slider-nav-next" 
          onClick={goToNext}
          aria-label="Следующее изображение"
        >
          ›
        </button>
      </div>
      <div className="product__slider-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`product__slider-thumbnail ${index === currentIndex ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к изображению ${index + 1}`}
          >
            <img 
              src={image} 
              alt={`Миниатюра ${index + 1}`}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/80x100?text=' + (index + 1);
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

