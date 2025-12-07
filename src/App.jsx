import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import ProductWithCertificatesPage from './components/ProductWithCertificatesPage/ProductWithCertificatesPage';
import CertificatesPage from './components/CertificatesPage/CertificatesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage showReviews={true} />} />
        <Route path="/without-reviews" element={<ProductPage showReviews={false} />} />
        <Route path="/product-with-certificates" element={<ProductWithCertificatesPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

