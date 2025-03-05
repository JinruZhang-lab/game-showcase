import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';  
import GameCard from '../components/GameCard';
import gamesData from '../data';
import '../styles/card.css';

function Games() {
  const { theme, toggleTheme } = useTheme();  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortKey, setSortKey] = useState('');

  const gamesPerPage = 5;  
 
  const genres = ['All', ...new Set(gamesData.map((game) => game.genre))];

 
  const filteredGames = gamesData
    .filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((game) => (selectedGenre === '' || selectedGenre === 'All' ? true : game.genre === selectedGenre))
    .sort((a, b) => {
      if (sortKey === 'rating') return b.rating - a.rating;
      if (sortKey === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
 
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const displayedGames = filteredGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="games-page">
 
      <div className="button-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
 
      <h1>Games</h1>
 
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
 
      <div className="filter-menu">
        <select onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSortKey(e.target.value)}>
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </div>
 
      <div className="games-list">
        {displayedGames.length > 0 ? (
          displayedGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              description={game.description}
              image={game.image}
              genre={game.genre}
              rating={game.rating}
            />
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>
 
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Games;