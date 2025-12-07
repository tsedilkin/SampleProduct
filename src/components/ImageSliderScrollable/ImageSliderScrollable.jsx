import { useState, useEffect, useRef } from 'react';
import './ImageSliderScrollable.css';

const ImageSliderScrollable = ({ images, scrollContainerRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stickyRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef?.current || images.length === 0) return;

    const handleScroll = () => {
      if (!stickyRef.current || !scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const viewportHeight = window.innerHeight;
      
      // Получаем позицию контейнера относительно документа
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Если контейнер еще не достиг верха экрана - показываем первое изображение
      if (containerTop > 0) {
        setCurrentIndex(0);
        return;
      }
      
      // Если контейнер уже полностью прошел - показываем последнее изображение
      if (containerTop + containerHeight < viewportHeight) {
        setCurrentIndex(images.length - 1);
        return;
      }
      
      // Вычисляем прогресс скролла контейнера через viewport
      // Когда верх контейнера на уровне верха viewport (containerTop = 0) - прогресс = 0
      // Когда контейнер полностью прошел viewport (containerTop + height = viewportHeight) - прогресс = 1
      const scrollDistance = Math.abs(containerTop); // Расстояние, на которое контейнер проскроллен
      const maxScrollDistance = containerHeight - viewportHeight; // Максимальное расстояние для скролла
      
      if (maxScrollDistance <= 0) {
        setCurrentIndex(0);
        return;
      }
      
      // Вычисляем прогресс скролла от 0 до 1
      const progress = Math.max(0, Math.min(1, scrollDistance / maxScrollDistance));
      
      // Определяем индекс изображения на основе прогресса
      // Равномерно распределяем изображения по всей высоте контейнера
      // Для каждого изображения выделяем равную долю прогресса
      const newIndex = Math.min(Math.floor(progress * images.length), images.length - 1);
      const clampedIndex = Math.max(0, newIndex);
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    // Используем requestAnimationFrame для оптимизации
    const onScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Инициализация

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [images.length, currentIndex, scrollContainerRef]);


  return (
    <div className="product__slider-scrollable-wrapper">
      <div className="product__slider-scrollable-main" ref={stickyRef}>
        <div className="product__slider-scrollable-image-container">
          <img 
            src={images[currentIndex]} 
            alt={`Изображение ${currentIndex + 1}`}
            className="product__slider-scrollable-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x1000?text=Image+' + (currentIndex + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderScrollable;
