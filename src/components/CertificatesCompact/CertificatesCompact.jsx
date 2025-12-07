import { certificatesData } from '../../data/certificatesData';
import './CertificatesCompact.css';

const CertificatesCompact = () => {
  // Параметры для скрытия панелей инструментов PDF
  const getPdfUrl = (file) => {
    return `${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`;
  };

  const handleOpenPdf = (file) => {
    const pdfUrl = getPdfUrl(file);
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="certificates-compact">
      <h3 className="certificates-compact-title">Сертификаты</h3>
      <div className="certificates-compact-list">
        {certificatesData.map((certificate) => (
          <div key={certificate.id} className="certificate-compact-item">
            <a
              href={getPdfUrl(certificate.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-compact-link"
              onClick={(e) => {
                e.preventDefault();
                handleOpenPdf(certificate.file);
              }}
            >
              <span className="certificate-compact-name">{certificate.title}</span>
              <span className="certificate-compact-icon">PDF</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesCompact;

