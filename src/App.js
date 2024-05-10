import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';

function App() {
  return (
    <Router>

    
<ResponsiveAppBar position="static" sx={{ width: '100vw', margin: 0, padding: 0, backgroundColor: '#FDEDEF' }}/>
        <Routes>
       
          {/* Additional routes can be added here */}
        </Routes>
     
     <Footer/>
    </Router>
  );
}

console.log("Public URL:", process.env.PUBLIC_URL);

export default App;
