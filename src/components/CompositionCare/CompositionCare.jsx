import './CompositionCare.css';

const CompositionCare = ({ composition }) => {
  if (!composition) return null;

  return (
    <div className="composition-care">
      <h3 className="section-subtitle">Состав и уход</h3>
      <div className="composition-section">
        {composition.materials.map((material, index) => (
          <div key={index} className="material-item">
            {material}
          </div>
        ))}
      </div>
      <div className="care-section">
        {composition.care.map((careItem, index) => (
          <div key={index} className="care-item">
            / {careItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompositionCare;

