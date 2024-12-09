import React, { useState, useRef, useEffect } from 'react';
import styles from './BannerNav2.module.css';
import SearchData from './SearchBarData';

const BannerNavSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef(null);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Adjusted threshold to 2 letters
    if (query.length >= 2) {
      const filteredResults = SearchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchBannerNavContainer} ref={searchContainerRef}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for articles ..."
          className={styles.searchInput}
        />
        {isFocused && searchResults.length > 0 && (
          <div className={styles.searchResults}>
            {searchResults.map((result) => (
              <div key={result.id} className={styles.searchResultItem}>
                <div>
                  <a
                    href={result.url}
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '400',
                      fontSize: '22px',
                    }}
                    rel="noreferrer"
                    className={styles.searchCallLink}
                  >
                    <p className={styles.searchResultTitle}>{result.title}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerNavSearch;