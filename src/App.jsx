import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage showReviews={true} />} />
        <Route path="/without-reviews" element={<ProductPage showReviews={false} />} />
      </Routes>
    </Router>
  );
}

export default App;

