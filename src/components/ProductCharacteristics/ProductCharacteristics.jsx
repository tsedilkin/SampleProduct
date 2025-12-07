import './ProductCharacteristics.css';

const ProductCharacteristics = ({ characteristics }) => {
  if (!characteristics || characteristics.length === 0) {
    return null;
  }

  return (
    <div className="table-characteristics">
      <h2 className="section-title">Характеристики</h2>
      <table className="characteristics-table">
        <tbody>
          {characteristics.map((char, index) => (
            <tr key={index} className="characteristics-row">
              <td className="characteristics-name">{char.name}</td>
              <td className="characteristics-value">{char.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCharacteristics;

