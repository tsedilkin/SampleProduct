import './YandexReviews.css';

const YandexReviews = ({ companyId = '156901174958' }) => {
  return (
    <div className="yandex-reviews">
      <h3 className="section-subtitle">Отзывы</h3>
      <div className="yandex-reviews-container">
        <iframe
          src={`https://yandex.ru/maps-reviews-widget/${companyId}?comments`}
          width="100%"
          height="600"
          frameBorder="0"
          title="Отзывы Яндекс.Карт"
          className="yandex-reviews-iframe"
          allowFullScreen
        />
      </div>
      <div className="yandex-reviews-link">
        <a 
          href={`https://yandex.ru/profile/${companyId}?lang=ru`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Все отзывы на Яндекс.Картах →
        </a>
      </div>
    </div>
  );
};

export default YandexReviews;

