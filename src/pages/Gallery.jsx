import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import '../styles/gallery.css';
import gamesData from '../data';

function Gallery() {
  const { theme, toggleTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null); // To track the clicked image

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`gallery-page ${theme}`}>
  
      <div className="button-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div> 
      <section className="gallery-header">
        <h1>Game Gallery</h1>
        <p>Click on a game to view it in detail!</p>
      </section>
 
      <div className="gallery-grid">
        {gamesData.map((game) => (
          <div
            key={game.id}
            className="gallery-card"
            onClick={() => setSelectedImage(game.image)}
          >
            <img src={game.image} alt={game.title} className="gallery-image" />
          </div>
        ))}
      </div>
 
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected Game" className="modal-image" />
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;