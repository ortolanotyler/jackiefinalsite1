// src/analytics.js
export const logPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-RT6GR7JXYG', {
      page_path: path,
    });
    console.log(`Logging page view for ${path}`); // Log page views
  } else {
    console.log('GA4 not initialized yet.');
  }
};