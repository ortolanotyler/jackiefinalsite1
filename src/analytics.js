// src/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-RT6GR7JXYG'); // Replace with your GA tracking ID
  console.log('Google Analytics Initialized'); // Log initialization
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log(`Logging page view for ${window.location.pathname + window.location.search}`); // Log page views
};