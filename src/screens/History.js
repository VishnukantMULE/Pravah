import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function History(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://pravah.onrender.com/userh', {
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


  const handleClick = (movieId) => {
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
  )
}
