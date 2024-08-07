import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HelmetProvider} from'react-helmet-async';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HelmetProvider>

);

// If you wato start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
