import { certificatesData } from '../../data/certificatesData';
import './Certificates.css';

const Certificates = () => {
  // Параметры для скрытия панелей инструментов PDF
  const getPdfUrl = (file) => {
    return `${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`;
  };

  const handleOpenPdf = (file) => {
    const pdfUrl = getPdfUrl(file);
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="certificates-section">
      <h2 className="section-title">Сертификаты</h2>
      <div className="certificates-grid">
        {certificatesData.map((certificate) => (
          <div key={certificate.id} className="certificate-card">
            <div className="certificate-preview">
              <iframe
                src={getPdfUrl(certificate.file)}
                title={certificate.title}
                className="certificate-iframe"
                loading="lazy"
              />
              <div className="certificate-overlay">
                <button
                  className="certificate-open-btn"
                  onClick={() => handleOpenPdf(certificate.file)}
                  aria-label={`Открыть ${certificate.title}`}
                >
                  Открыть в новом окне
                </button>
              </div>
            </div>
            <div className="certificate-info">
              <h3 className="certificate-title">{certificate.title}</h3>
              {certificate.description && (
                <p className="certificate-description">{certificate.description}</p>
              )}
              <a
                href={getPdfUrl(certificate.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-download-link"
              >
                Скачать PDF →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

