import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; 
import gamesData from '../data';
import '../styles/home.css';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => { 
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shouldReduceMotion = mediaQuery.matches;

    let interval;

    if (!shouldReduceMotion) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gamesData.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gamesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gamesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`home-page ${theme}`}>
      <div className="button-container">
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <section className="hero-banner">
        <h1>Welcome to Game Showcase</h1>
        <p>Explore, rate, and discover amazing games!</p>
        <Link to="/games" className="cta-button">Explore Games</Link>
      </section>

      <section className="carousel">
        <h2>Featured Games</h2>
        <div className="carousel-container">
          <button onClick={handlePrev} aria-label="Previous Image">
            &#9664;
          </button>
          <div className="carousel-item">
            <img
              src={gamesData[currentIndex].image}
              alt={gamesData[currentIndex].title}
            />
          </div>
          <button onClick={handleNext} aria-label="Next Image">
            &#9654;
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;