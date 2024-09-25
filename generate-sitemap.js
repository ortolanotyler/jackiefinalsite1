const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://buildmeawebsite.ca' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/sitemap', changefreq: 'weekly', priority: 0.8 },
  { url: '/subscribe', changefreq: 'monthly', priority: 0.8 },
  { url: '/tutorials', changefreq: 'weekly', priority: 0.8 },
  { url: '/bridal', changefreq: 'weekly', priority: 0.8 },
  { url: '/quiz', changefreq: 'weekly', priority: 0.8 },
  { url: '/timetraveltutorials', changefreq: 'weekly', priority: 0.8 },
  { url: '/popculture', changefreq: 'weekly', priority: 0.8 },
  { url: '/trends', changefreq: 'weekly', priority: 0.8 },
  { url: '/reviews', changefreq: 'weekly', priority: 0.8 },
  { url: '/travel', changefreq: 'weekly', priority: 0.8 },
  { url: '/diary', changefreq: 'weekly', priority: 0.8 },
  { url: '/mystyle', changefreq: 'weekly', priority: 0.8 },
  { url: '/vintagevibesmerch', changefreq: 'monthly', priority: 0.6 },
  { url: '/press', changefreq: 'monthly', priority: 0.6 },
  { url: '/fan-art', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/emaillist', changefreq: 'monthly', priority: 0.6 },
  { url: '/videogrid', changefreq: 'monthly', priority: 0.6 },
  { url: '/twiggy', changefreq: 'monthly', priority: 0.6 },
  { url: '/nomakeupspring', changefreq: 'monthly', priority: 0.6 },
  { url: '/sophialoren', changefreq: 'monthly', priority: 0.6 },
  { url: '/sharontatebridal', changefreq: 'monthly', priority: 0.6 },
  { url: '/sharoniconic', changefreq: 'monthly', priority: 0.6 },
  { url: '/patmcgrath', changefreq: 'monthly', priority: 0.6 },
  { url: '/animalpretty', changefreq: 'monthly', priority: 0.6 },
  { url: '/lattemakeup', changefreq: 'monthly', priority: 0.6 },
  { url: '/barbieblog', changefreq: 'monthly', priority: 0.6 },
  { url: '/barbiedoll', changefreq: 'monthly', priority: 0.6 },
  { url: '/barbieroundup', changefreq: 'monthly', priority: 0.6 },
  { url: '/victoriasecret', changefreq: 'monthly', priority: 0.6 },
  { url: '/summerbeauty', changefreq: 'monthly', priority: 0.6 },
  { url: '/camerasettings', changefreq: 'monthly', priority: 0.6 },
  { url: '/emilyinparis', changefreq: 'monthly', priority: 0.6 },
  { url: '/yardley65', changefreq: 'monthly', priority: 0.6 },
  { url: '/gracekelly', changefreq: 'monthly', priority: 0.6 },
  { url: '/bardothairstyles', changefreq: 'monthly', priority: 0.6 },
  { url: '/balkeblog', changefreq: 'monthly', priority: 0.6 },
  { url: '/francesca', changefreq: 'monthly', priority: 0.6 },
  { url: '/halloween', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz2/bunny', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz2/fox', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz2/cat', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz2/deer', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz1', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz2', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/bacarra', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/abril', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/percy', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/ora', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/zara', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/elizabeth', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/porsha', changefreq: 'monthly', priority: 0.6 },
  { url: '/quiz3/weddingdressguide', changefreq: 'monthly', priority: 0.6 },
  { url: '/barbieski', changefreq: 'monthly', priority: 0.6 },
  { url: '/blackandleather', changefreq: 'monthly', priority: 0.6 },
  { url: '/ninetiesstyle', changefreq: 'monthly', priority: 0.6 },
  { url: '/pinkleather', changefreq: 'monthly', priority: 0.6 },
  { url: '/retrofloral', changefreq: 'monthly', priority: 0.6 },
  { url: '/cabinfever', changefreq: 'monthly', priority: 0.6 },
  { url: '/manhattancool', changefreq: 'monthly', priority: 0.6 },
  { url: '/falllbd', changefreq: 'monthly', priority: 0.6 },
  { url: '/darkflorals', changefreq: 'monthly', priority: 0.6 },
  { url: '/parisianchic', changefreq: 'monthly', priority: 0.6 },
  { url: '/vaticanslay', changefreq: 'monthly', priority: 0.6 },
  { url: '/walkingwaiheke', changefreq: 'monthly', priority: 0.6 },
  { url: '/princesscoreparis', changefreq: 'monthly', priority: 0.6 },
  { url: '/bonbonreview', changefreq: 'weekly', priority: 0.8 },
  { url: '/jickyreview', changefreq: 'weekly', priority: 0.8 },
  { url: '/halfetireview', changefreq: 'weekly', priority: 0.8 },
  { url: '/fairytalewedding', changefreq: 'weekly', priority: 0.8 },
  { url: '/vlogs', changefreq: 'weekly', priority: 0.8 },
  { url: '/fable', changefreq: 'weekly', priority: 0.8 },
  { url: '/rome', changefreq: 'weekly', priority: 0.8 },
  { url: '/diyflowerpins', changefreq: 'weekly', priority: 0.8 },
  { url: '/andazmaui', changefreq: 'weekly', priority: 0.8 },
  { url: '/monttremblant', changefreq: 'weekly', priority: 0.8 },
  { url: '/westgatehotel', changefreq: 'weekly', priority: 0.8 },
  { url: '/princeofwales', changefreq: 'weekly', priority: 0.8 },
  { url: '/sorrento1', changefreq: 'weekly', priority: 0.8 },
  { url: '/disney1', changefreq: 'weekly', priority: 0.8 },
  { url: '/disney2', changefreq: 'weekly', priority: 0.8 },
  { url: '/hotelq', changefreq: 'weekly', priority: 0.8 },
  { url: '/hotelq2', changefreq: 'weekly', priority: 0.8 },
  { url: '/newzealand', changefreq: 'weekly', priority: 0.8 },
  { url: '/brussels', changefreq: 'weekly', priority: 0.8 },
  { url: '/notfound', changefreq: 'never', priority: 0.0 },
];
  // Add more pages as necessary


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