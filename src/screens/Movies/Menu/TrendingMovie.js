import React, { useState, useEffect } from 'react';
import './style/AllMovies.css';
import defaultImage from './style/PNG/PravahStudio.png';
import Loading from '../../../system/Loading';
import playbutton from './style/PNG/play-store.png'
import bookmark from './style/PNG/bookmark.png'

export default function TrendingMovie() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch('http://localhost:4000/movies/trendingmovies');
          if (response.ok) {
            const data = await response.json();
            setMovies(data);
          } else {
            throw new Error('Error fetching movies');
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };
  
      fetchMovies();
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
          movies.map((movie) => (
            <div className="movie-card" key={movie._id}>
              <img src={defaultImage || movie.Movie_Image || defaultImage} alt={movie.Movie_Name} />
              <h2>{movie.Movie_Name}</h2>
              <p className='year'> {movie.Movie_Year}</p>
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
