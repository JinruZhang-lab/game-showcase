import React from 'react';

function FilterMenu({ genres, onFilterChange, onSortChange }) {
  return (
    <div className="filter-menu">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by</option>
        <option value="rating">Rating</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default FilterMenu;