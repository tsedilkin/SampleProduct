import { useState } from 'react';
import './BoutiqueAvailability.css';

const BoutiqueAvailability = ({ boutiques }) => {
  const [selectedBoutique, setSelectedBoutique] = useState(null);

  if (!boutiques || boutiques.length === 0) return null;

  return (
    <div className="boutique-availability">
      <h3 className="section-subtitle">Наличие в магазинах</h3>
      <div className="boutiques-list">
        {boutiques.map((boutique, index) => (
          <div key={index} className="boutique-item">
            <div className="boutique-header">
              <div className="boutique-info">
                <div className="boutique-hours">{boutique.hours}</div>
                <div className="boutique-name">{boutique.name}</div>
                <div className="boutique-address">{boutique.address}</div>
                {boutique.phone && <div className="boutique-phone">{boutique.phone}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoutiqueAvailability;

