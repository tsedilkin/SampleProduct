import { useState, useEffect } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductDescription from '../ProductDescription/ProductDescription';
import ModelParams from '../ModelParams/ModelParams';
import CompositionCare from '../CompositionCare/CompositionCare';
import BoutiqueAvailability from '../BoutiqueAvailability/BoutiqueAvailability';
import SizeChart from '../SizeChart/SizeChart';
import YandexReviews from '../YandexReviews/YandexReviews';
import { productImages } from '../../data/productImages';
import { productData } from '../../data/productData';
import { boutiqueData } from '../../data/boutiqueData';
import { yandexReviewsConfig } from '../../data/yandexReviews';
import { getProductImages } from '../../utils/getProductImages';
import './ProductPage.css';

const ProductPage = ({ showReviews = false }) => {
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]?.value || '');
  const [currentImages, setCurrentImages] = useState(productImages);
  
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
    <div className="product-page">
      <div className="product-page-container">
        <div className="product-main-section">
          <div className="product-images">
            <ImageSlider images={currentImages} />
          </div>
          <div className="product-details-wrapper">
            <div className={`product-details-columns ${showReviews && yandexReviewsConfig.enabled ? 'with-reviews' : 'without-reviews'}`}>
              <div className="product-details">
                <ProductInfo 
                  productData={productData}
                  onShowSizeChart={scrollToSizeChart}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>
              {showReviews && yandexReviewsConfig.enabled && (
                <div className="product-reviews-column">
                  <YandexReviews companyId={yandexReviewsConfig.companyId} />
                </div>
              )}
            </div>
            <div className="product-description-sidebar">
              <ProductDescription 
                description={productData.description}
                characteristics={productData.characteristics}
              />
            </div>
          </div>
        </div>

        <div className="product-content-section">
          {productData.modelParams && <ModelParams params={productData.modelParams} />}
          
          {productData.composition && <CompositionCare composition={productData.composition} />}
          
          {productData.sizeChart && <SizeChart sizeChart={productData.sizeChart} shouldOpen={showSizeChart} />}
        </div>

        <div className="product-boutiques-section">
          <BoutiqueAvailability boutiques={boutiqueData} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

