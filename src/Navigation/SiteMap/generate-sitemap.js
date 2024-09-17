const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://buildmeawebsite.ca' });

// List all the pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  // Add more pages as necessary
];

pages.forEach(page => {
  sitemap.write(page);
});

sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    const sitemapPath = './public/sitemap.xml';
    const writeStream = createWriteStream(sitemapPath);
    writeStream.write(data.toString());
    console.log(`Sitemap written to ${sitemapPath}`);
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  });