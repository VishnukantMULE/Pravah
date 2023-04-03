import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Recommanded.css'

function Recommanded(props) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/marathi_movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = (movieId) => {
    navigate(`/play/${movieId}`);
    fetch('http://localhost:4000/history', {
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.Movie_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <br />
      <div className="search-container">
        <input type="text" placeholder="Search movies" value={searchQuery} onChange={handleSearch} />
      </div>
      <h1>Marathi Movies</h1>
      <div className="card-container">
        {filteredMovies.map(movie => (
          <div className="card" key={movie.Movie_ID} onClick={() => handleClick(movie.Movie_ID)}>
            <img src={movie.Movie_Image} alt={movie.Movie_Name} />
            <div className="card-content">
              <h2>{movie.Movie_Name}</h2>
              <p>{movie.Movie_Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommanded;
