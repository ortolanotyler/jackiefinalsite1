import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
import Sitemap from './Navigation/SiteMap/SiteMap';
import EmailSubscribe from './Components/EmailSubscribe';
import MediaKit from './Navigation/Footer/MediaKit';
import Yardley65 from './Articles/Tutorials/VintageVibes/Yardley1965';
import VictoriaSecret from './Articles/Tutorials/PopCulture/VictoriaSecret';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/emailsubscribe" element={<EmailSubscribe/>} />
        <Route path="/mediakit" element={<MediaKit/>} />

        {/* Article Routes */}
        <Route path="/yardley1965" element={<Yardley65/>} />
        <Route path="/VSfashionshow2014" element={<VictoriaSecret/>} />



        {/* 404 Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
