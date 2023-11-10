import React, { useState, useContext, useEffect } from 'react';
import Sidebar from './Sidebar';
import TrendingMovie from './Menu/TrendingMovie';
import AllMovies from './Menu/AllMovies';
import SavedMovies from './Menu/SavedMovies';
import History from './Menu/History';
import MoviePlay from './PlayMovie/MoviePlay';
import './style/Movies.css';
import { MovieContext } from './Menu/MovieContext';

export default function Movies() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { selectedMovieId, setSelectedMovieId } = useContext(MovieContext);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedMovieId(null); // Reset the selectedMovieId when a new option is selected
  };

  useEffect(() => {
    console.log('Effect: Setting up event listener for playMovie');
    const handlePlayMovie = (event) => {
      console.log('handlePlayMovie called with event:', event);
      const movieId = event.detail;
      console.log("Play event received for movie ID:", movieId);
      // Add logic to handle playing the movie with the given ID
      // You can set the selectedMovieId here if needed.
    };
  
    window.addEventListener('playMovie', handlePlayMovie);
  
    return () => {
      console.log('Cleaning up event listener for playMovie');
      window.removeEventListener('playMovie', handlePlayMovie);
    };
  }, []);
  
  let componentToRender;
  switch (selectedOption) {
    case 'trending':
      componentToRender = <TrendingMovie />;
      break;
    case 'allmovies':
      componentToRender = selectedMovieId ? <MoviePlay id={selectedMovieId} /> : <AllMovies />;
      break;
    case 'save':
      componentToRender = <SavedMovies />;
      break;
    case 'history':
      componentToRender = <History />;
      break;
    default:
      componentToRender = <TrendingMovie />;
  }

  return (
    <div className="wrapper">
      <Sidebar onOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
      <div className="component-container">
        {componentToRender}
      </div>
    </div>
  );
}
