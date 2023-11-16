import React, { useState, useEffect } from 'react';
import '../Movies/Menu/style/AllMovies.css'; // Import the CSS file with your styles

import playbutton from '../Movies/Menu/style/PNG/play-store.png';
import bookmark from '../Movies/Menu/style/PNG/bookmark.png';
import defaultImage from '../Movies/Menu/style/PNG/PravahStudio.png'
import Loading from '../../system/Loading';

export default function Dashboard() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies/trendingmovies');
        if (response.ok) {
          const data = await response.json();
          setTrendingMovies(data);
        } else {
          throw new Error('Error fetching trending movies');
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handlePlayClick = (movieId) => {
    console.log(`Play movie with ID: ${movieId}`);
  };

  const handleSaveClick = (movieId) => {
    console.log(`Save movie with ID: ${movieId}`);
  };

  return (
    <div className="movies-container">
      {loading && <Loading />} {/* Render loading component while loading */}
      {!loading &&
        trendingMovies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.Movie_Image || defaultImage} alt={movie.Movie_Name} />
            <h2>{movie.Movie_Name}</h2>
            <p className='year'>{movie.Movie_Year}</p>
            <div className="button-container">
              <button onClick={() => handlePlayClick(movie._id)}>
                <img src={playbutton} alt='play' />
              </button>
              <button onClick={() => handleSaveClick(movie._id)}>
                <img src={bookmark} alt="save" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
