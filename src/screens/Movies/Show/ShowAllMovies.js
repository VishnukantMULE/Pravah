import React, { useState, useEffect } from 'react';
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://your-backend-api/movies/getallmovies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);


  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div className="card" key={index}>
          <img className="card-image" src={movie.Movie_Image} alt={movie.Movie_Name} />
          <div className="card-details">
            <h3 className="card-title">{movie.Movie_Name}</h3>
            <p className="card-info">Year: {movie.Movie_Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
