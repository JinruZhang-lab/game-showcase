import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { useNavigate, useParams } from 'react-router-dom';
import gamesData from '../data';

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = gamesData.find((game) => game.id === parseInt(id, 10));
  const { theme, toggleTheme } = useTheme();

  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState('');
  const [error, setError] = useState('');
  const [ratingDistribution, setRatingDistribution] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    updateRatingDistribution();
  }, [ratings]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const updateRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    ratings.forEach((rating) => {
      if (rating >= 1 && rating <= 5) {
        distribution[rating - 1]++;
      }
    });
    setRatingDistribution(distribution);
  };

  if (!game) {
    return <p>Game not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedRating = parseInt(newRating, 10);
    if (parsedRating < 1 || parsedRating > 5 || isNaN(parsedRating)) {
      setError('Please enter a valid rating between 1 and 5.');
      return;
    }
    setRatings((prevRatings) => [...prevRatings, parsedRating]);
    setNewRating('');
    setError('');
  };

  return (
    <div className={`game-details ${theme}`}>
    
      <div className="button-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
      </div>
 
      <div className="button-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <img src={game.image} alt={game.title} className="game-details__image" />
      <p>
        <strong>Genre:</strong> {game.genre}
      </p>
      <p>
        <strong>Rating:</strong> {game.rating} ⭐
      </p>
      <p>
        <strong>Release Date:</strong> {game.releaseDate || 'Unknown'}
      </p>
      <p>
        <strong>Developer:</strong> {game.developer || 'Unknown'}
      </p>
      <p>
        <strong>Platforms:</strong> {game.platforms.join(', ') || 'Unknown'}
      </p>
 
      <form onSubmit={handleSubmit}>
        <label>
          Rate this game (1-5):
          <input
            type="number"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
        </label>
        <button type="submit">Submit Rating</button>
        {error && <p className="error-message">{error}</p>}
      </form>
 
      <div className="rating-distribution">
        <h2>Rating Distribution</h2>
        {ratingDistribution.map((count, index) => (
          <div key={index} className="rating-bar">
            <span>{index + 1} ⭐:</span>
            <div
              style={{
                width: `${count * 20}px`,
                height: '10px',
                backgroundColor: theme === 'light' ? 'blue' : 'yellow',
                margin: '5px 0',
              }}
            ></div>
            <span>({count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameDetails;