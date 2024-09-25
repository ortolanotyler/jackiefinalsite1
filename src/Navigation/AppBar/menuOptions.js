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
    subMenu: [
      { name: 'All Tutorials', path: '/tutorials' },
      { name: 'Trending Now', path: '/trends' },
      { name: 'Pop Culture', path: '/popculture' },
      { name: 'Vintage Vibes', path: '/timetraveltutorials' },
      { name: 'Reviews', path: '/reviews' },
    ],
  },
  {
    name: 'Travel',
    subMenu: [
      { name: 'Read Latest', path: '/sorrento' },
      { name: 'Travel Home', path: '/travel' }, // Replace with the actual path dynamically if needed
    ],
  },
  {
    name: 'Quiz',
    subMenu: [
      { name: 'Quiz Homepage', path: '/quiz' },
      { name: 'What Animal Pretty Are You?', path: '/quiz-2-home' },
      { name: '2025 Ultimate Wedding Dress Guide', path: '/quiz-3-home' },
    ],
  },
  { name: 'About', path: '/about' },
  { name: 'Style', path: '/mystyle' },
];

export default menuOptions;