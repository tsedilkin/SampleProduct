import { useState, useEffect, useRef } from 'react';
import './SizeChart.css';

const SizeChart = ({ sizeChart, shouldOpen }) => {
  const [showChart, setShowChart] = useState(false);
  const [showMeasureGuide, setShowMeasureGuide] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (shouldOpen) {
      setShowChart(true);
    }
  }, [shouldOpen]);

  if (!sizeChart || sizeChart.length === 0) return null;

  return (
    <div className="size-chart-section" ref={sectionRef}>
      <button 
        className="size-chart-toggle"
        onClick={() => setShowChart(!showChart)}
      >
        Размерная сетка, см
      </button>
      
      {showChart && (
        <div className="size-chart-container">
          <table className="size-chart-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Грудь</th>
                <th>Талия</th>
                <th>Бедра</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((item, index) => (
                <tr key={index}>
                  <td className="size-name">{item.size}</td>
                  <td>{item.chest}</td>
                  <td>{item.waist}</td>
                  <td>{item.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <button 
            className="measure-guide-toggle"
            onClick={() => setShowMeasureGuide(!showMeasureGuide)}
          >
            Как измерить?
          </button>
          
          {showMeasureGuide && (
            <div className="measure-guide">
              <p>Вам понадобится сантиметровая лента.</p>
              <p>
                <strong>Обхват груди:</strong> лента должна плотно прилегать к телу, спереди проходить по наиболее выступающим точкам, сбоку - через подмышечные впадины, сзади - обхватывая лопатки.
              </p>
              <p>
                <strong>Обхват талии:</strong> измеряется строго горизонтально по самой узкой части тела.
              </p>
              <p>
                <strong>Обхват бедер:</strong> лента должна находиться горизонтально, проходя по середине бедра и сзади по наиболее выступающим точкам ягодиц.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SizeChart;

