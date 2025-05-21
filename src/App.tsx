import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import LoadingWithLogo from './components/LoadingWithLogo';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Skip loader for privacy policy page
  const skipLoading = location.pathname === '/privacy-policy';

  useEffect(() => {
    if (skipLoading) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [skipLoading]);

  if (loading) {
    return <LoadingWithLogo />;
  }

  return (
    <div 
      className="min-h-screen text-foreground font-assistant relative overflow-hidden"
      style={{
        background: `#f1e6e2`,
      }}
    >
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;