// public/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-RT6GR7JXYG'); // Replace with your GA tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
