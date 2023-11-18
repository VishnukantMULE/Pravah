import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import MovieAction from './MovieAction';
import MovieRecommandation from './MovieRecommandation';
import './MoviePlay.css'; // Import the external CSS file

export default function MoviePlay() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://pravahstudio.onrender.com/movies/getthatmovies/${id}`);

        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        } else {
          console.error('Failed to fetch movie details:', response.statusText);
        }
        console.log("Response from server:", response);

      } catch (error) {
        console.error('An error occurred while fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-play-container">
      <div className="movie-details">
        <h2 className="movie-title">MoviePlay</h2>
        {movie ? (
          <>
            <h3>{movie.Movie_Name}</h3>
            <ReactPlayer
              url={movie.Movie_Link}
              controls={true}
              width="100%"
              height="auto"
            />
            {/* Add other details as needed */}
          </>
        ) : (
          <p className="movie-loading">Loading...</p>
        )}
      </div>
      <div className="movie-action-container">
        <MovieAction />
        <hr />
        <MovieRecommandation />
      </div>
    </div>
  );
}
