let isGAInitialized = false;

export const initializeGA = () => {
  if (!isGAInitialized && typeof window.gtag === 'function') {
    console.log('GA4 already initialized.');
    isGAInitialized = true; // Mark as initialized
  } else if (!isGAInitialized) {
    console.log('Initializing GA4.');
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-RT6GR7JXYG');
    isGAInitialized = true; // Mark as initialized
  }
};

export const logPageView = (path) => {
  if (isGAInitialized && typeof window.gtag === 'function') {
    window.gtag('config', 'G-RT6GR7JXYG', {
      page_path: path,
    });
    console.log(`Logging page view for ${path}`);
  } else {
    console.log('GA4 not initialized yet.');
  }
};