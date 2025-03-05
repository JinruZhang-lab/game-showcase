import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({ id, title, description, image, genre, rating }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-card__image" />
      <div className="game-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Rating:</strong> {rating} ⭐</p>
        <Link to={`/games/${id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default GameCard;