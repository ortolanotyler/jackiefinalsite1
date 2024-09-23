const pages = [
    { name: 'Home', path: '/' },
 
    { name: 'Travel', path: '/travel', subMenu: null },
    { name: 'Quiz', path: '/quiz', subMenu: null },
  ];
  
  const aboutOptions = [
    { name: 'Contact', path: '/contact' },
    { name: 'Media Kit', path: '/press' },
    { name: 'Fan Art Gallery', path: '/fan-art' },
  ];
  
  const shopOptions = [
    { name: 'Shop My Style', path: '/mystyle' },
    { name: 'VintageVibes Merch', path: '/vintagevibesmerch' },
  ];
  
  const tutorialOptions = [
    { name: 'All Tutorials', path: '/tutorials' },
    { name: 'Bridal', path: '/bridal' },
    { name: 'Trending Now', path: '/trends' },
    { name: 'Pop Culture', path: '/popculture' },
    { name: 'Vintage Vibes', path: '/timetraveltutorials' },
  ];
  
// menuOptions.js
const menuOptions = [
    { name: 'Home', path: '/' },
    {
      name: 'Beauty',
      path: '/tutorials',
      subMenu: [
        { name: 'Read All Beauty', path: '/tutorials' },
        { name: 'Trending Now', path: '/trends' },
        { name: 'Pop Culture', path: '/popculture' },
        { name: 'Vintage Vibes', path: '/timetraveltutorials' },
        { name: 'Reviews', path: '/reviews' },
      ],
    },
    { name: 'Travel', path: '/travel' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'About', path: '/about' },
    { name: 'Style', path: '/style' },
  ];
  
  export default menuOptions;
