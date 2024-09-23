const pages = [
    { name: 'Home', path: '/' },
    { name: 'Beauty', path: '/tutorials', subMenu: null },
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
  
  const menuOptions = [
    ...pages,
    { name: 'About', path: '#', subMenu: aboutOptions },
    { name: 'Style', path: '#', subMenu: shopOptions },
    
  ];
  
  export default menuOptions;