import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Forum from './pages/Forum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/" element={<div className="pt-16">Homepage content here</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;