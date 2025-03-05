import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Gallery from './pages/Gallery';
import About from './pages/About';
import GameDetails from './pages/GameDetails';  

function App() {
  return (
    <Router> 
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetails />} />  
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;