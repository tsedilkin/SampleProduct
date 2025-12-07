import './ModelParams.css';

const ModelParams = ({ params }) => {
  if (!params) return null;

  return (
    <div className="model-params">
      <h3 className="params-title">Параметры модели</h3>
      <div className="params-grid">
        <div className="param-item">
          <span className="param-label">Рост</span>
          <span className="param-value">{params.height}</span>
        </div>
        <div className="param-item">
          <span className="param-label">Грудь</span>
          <span className="param-value">{params.chest}</span>
        </div>
        <div className="param-item">
          <span className="param-label">Талия</span>
          <span className="param-value">{params.waist}</span>
        </div>
        <div className="param-item">
          <span className="param-label">Бёдра</span>
          <span className="param-value">{params.hips}</span>
        </div>
        <div className="param-item">
          <span className="param-label">Размер изделия</span>
          <span className="param-value">{params.size}</span>
        </div>
      </div>
    </div>
  );
};

export default ModelParams;

