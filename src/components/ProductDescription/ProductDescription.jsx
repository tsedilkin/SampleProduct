import ProductCharacteristics from '../ProductCharacteristics/ProductCharacteristics';
import './ProductDescription.css';

const ProductDescription = ({ description, characteristics }) => {
  return (
    <div className="product-description">
      <h2 className="section-title">Описание товара</h2>
      <div className="description-text">
        {description.split('\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="description-paragraph">
              {paragraph}
            </p>
          )
        ))}
      </div>
      {characteristics && characteristics.length > 0 && (
        <ProductCharacteristics characteristics={characteristics} />
      )}
    </div>
  );
};

export default ProductDescription;

