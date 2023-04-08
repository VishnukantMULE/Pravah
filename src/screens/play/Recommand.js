import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Recommand(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://pravah.onrender.com/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          movie_id: props.movieId
        })
      })
      .then(res => res.json())
      .then(movies => setMovies(movies))
      .catch(err => console.error(err));
  }, [props.movieId]);

  const handleClick = (movieId) => {
    // handle click event on the movie card
    navigate(`/play/${movieId}`);
    fetch('https://pravah.onrender.com/history', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          movie_id: movieId,
          username: props.username,
      })
    })
    .then(response => response.json())
    .catch(error => console.error(error));

    console.log('Movie clicked:', movieId);
  };

  return (
    <div className="card-container">
      {movies.map(movie => (
        <div className="card" key={movie.Movie_ID} onClick={() => handleClick(movie.Movie_ID)}>
          <img src={movie.Movie_Image} alt={movie.Movie_Name} />
          <div className="card-content">
            <h2>{movie.Movie_Name}</h2>
            <p>{movie.Movie_Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
