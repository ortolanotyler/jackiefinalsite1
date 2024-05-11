import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
import Sitemap from './Navigation/SiteMap/SiteMap';
import EmailSubscribe from './Components/EmailSubscribe';
import MediaKit from './Navigation/Footer/MediaKit';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/emailsubscribe" element={<EmailSubscribe/>} />
        <Route path="/mediakit" element={<MediaKit/>} />
        {/* Additional routes can be added here */}




        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
