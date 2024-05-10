import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
import Sitemap from './Navigation/SiteMap/SiteMap';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/sitemap" element={<Sitemap />} />
        {/* Additional routes can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
