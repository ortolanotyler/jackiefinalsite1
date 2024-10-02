export const logPageView = (path) => {
  if (window.CookieConsent && window.CookieConsent.consented && window.gtag) {
    window.gtag('config', 'G-RT6GR7JXYG', {
      page_path: path,
    });
    console.log(`Logging page view for ${path}`);
  } else {
    console.log('GA4 not initialized yet. Waiting for consent...');
  }
};