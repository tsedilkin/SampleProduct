import './ProductDescription.css';

const ProductDescription = ({ description, features }) => {
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
      {features && features.length > 0 && (
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductDescription;

