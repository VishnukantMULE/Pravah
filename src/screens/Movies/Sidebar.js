import React from 'react';
import trendingpng from './Icons/trending-topic.png';
import allmoviepng from './Icons/four-arrows.png';
import savepng from './Icons/bookmark.png';
import historypng from './Icons/restore.png';
import './style/Sidebar.css'; // Import your CSS file

export default function Sidebar({ onOptionSelect, selectedOption }) {
  return (
    <div className="sidebar-container">
      <button
        className={`sidebar-button ${selectedOption === 'trending' ? 'selected' : ''}`}
        onClick={() => onOptionSelect('trending')}
      >
        <img className="button-icon" src={trendingpng} alt="Trending" />
      </button>
      <button
        className={`sidebar-button ${selectedOption === 'allmovies' ? 'selected' : ''}`}
        onClick={() => onOptionSelect('allmovies')}
      >
        <img className="button-icon" src={allmoviepng} alt="All Movies" />
      </button>
      <button
        className={`sidebar-button ${selectedOption === 'save' ? 'selected' : ''}`}
        onClick={() => onOptionSelect('save')}
      >
        <img className="button-icon" src={savepng} alt="Save" />
      </button>
      <button
        className={`sidebar-button ${selectedOption === 'history' ? 'selected' : ''}`}
        onClick={() => onOptionSelect('history')}
      >
        <img className="button-icon" src={historypng} alt="History" />
      </button>
    </div>
  );
}
