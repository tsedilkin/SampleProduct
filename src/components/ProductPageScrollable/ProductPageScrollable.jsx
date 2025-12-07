import { useState, useEffect, useRef } from 'react';
import ImageSliderScrollable from '../ImageSliderScrollable/ImageSliderScrollable';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDescription from '../ProductDescription/ProductDescription';
import BoutiqueAvailability from '../BoutiqueAvailability/BoutiqueAvailability';
import { productImages } from '../../data/productImages';
import { productData } from '../../data/productData';
import { boutiqueData } from '../../data/boutiqueData';
import { getProductImages } from '../../utils/getProductImages';
import '../ProductPage/ProductPage.css';
import './ProductPageScrollable.css';

const ProductPageScrollable = () => {
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]?.value || '');
  const [currentImages, setCurrentImages] = useState(productImages);
  const sliderContainerRef = useRef(null);
  
  // Устанавливаем заголовок страницы
  useEffect(() => {
    document.title = productData.name;
  }, []);
  
  // Обновляем изображения при изменении выбранного цвета
  useEffect(() => {
    const selectedColorData = productData.colors.find(c => c.value === selectedColor);
    if (selectedColorData && selectedColorData.productId) {
      const newImages = getProductImages(selectedColorData.productId);
      setCurrentImages(newImages);
    } else {
      setCurrentImages(productImages);
    }
  }, [selectedColor]);
  
  const scrollToSizeChart = () => {
    setShowSizeChart(true);
    setTimeout(() => {
      const element = document.querySelector('.size-chart-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Открываем таблицу размеров
        const toggle = element.querySelector('.size-chart-toggle');
        if (toggle && !toggle.getAttribute('data-opened')) {
          toggle.click();
          toggle.setAttribute('data-opened', 'true');
        }
      }
    }, 100);
  };

  return (
    <div className="product-page-scrollable">
      <div className="product-page-scrollable-container">
        <div className="product-page-scrollable-main">
          <div 
            className="product-page-scrollable-images" 
            ref={sliderContainerRef}
            style={{ 
              minHeight: currentImages.length > 1 
                ? `${currentImages.length * 100}vh` 
                : '100vh' 
            }}
          >
            <ImageSliderScrollable 
              images={currentImages} 
              scrollContainerRef={sliderContainerRef}
            />
          </div>
          <div className="product-page-scrollable-details-wrapper">
            <div className="product-page-scrollable-details">
              <ProductInfo 
                productData={productData}
                onShowSizeChart={scrollToSizeChart}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </div>
            <div className="product-page-scrollable-description">
              <ProductDescription 
                description={productData.description}
                characteristics={productData.characteristics}
              />
            </div>
          </div>
        </div>

        <div className="product-page-scrollable-boutiques">
          <BoutiqueAvailability boutiques={boutiqueData} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageScrollable;

