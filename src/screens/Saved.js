import React, { useState, useEffect } from 'react';

export default function Saved(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:4000/usersaved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: props.username })
      });
      const data = await response.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, [props.username]);

  return (
    <div className="card-container">
      {movies.map(movie => (
        <div className="card" key={movie.Movie_ID}>
          <img src={movie.Movie_Image} alt={movie.Movie_Name} />
          <div className="card-content">
            <h2>{movie.Movie_Name}</h2>
            <p>{movie.Movie_Year}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
