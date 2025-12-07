import './RelatedProducts.css';

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="related-products">
      <h3 className="section-subtitle">Other product [{products.length} товаров]</h3>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x400?text=' + encodeURIComponent(product.name);
                }}
              />
            </div>
            <div className="product-card-info">
              <h4 className="product-card-name">{product.name}</h4>
              <div className="product-card-price">
                {formatPrice(product.price)} ₽
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

