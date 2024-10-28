import React from 'react';
import '../App.css';

function FilterButtons({ currentFilter, setFilter }) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
    { label: 'Recently Removed', value: 'recentlyRemoved' }
  ];

  return (
    <div className="filter-buttons-container">
      {filters.map(filter => (
        <button 
          key={filter.value}
          className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => setFilter(currentFilter === filter.value ? 'all' : filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
