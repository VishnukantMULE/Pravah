import React, { useState, useEffect } from "react";
import "./style/AllMovies.css";
import defaultImage from "./style/PNG/PravahStudio.png";
import Loading from "../../../system/Loading";
import playbutton from "./style/PNG/play-store.png";
import bookmark from "./style/PNG/bookmark.png";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../Menu/MovieContext";

export default function AllMovies() {
  const { setSelectedMovieId } = React.useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://pravahstudio.onrender.com/movies/getallmovies"
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          throw new Error("Error fetching movies");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePlayClick = (movieId) => {
    setSelectedMovieId(movieId);
    navigate(`/movies/play/${movieId}`);
  };

  const handleSaveClick = (movieId) => {
    console.log(`Save movie with ID: ${movieId}`);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.Movie_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
        className="serch_input"
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="movies-container">
        {loading && <Loading />}
        {!loading &&
          filteredMovies.map((movie) => (
            <div className="movie-card" key={movie._id}>
              <img
                src={movie.Movie_Image || defaultImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
                alt={movie.Movie_Name}
              />
              <h2>{movie.Movie_Name}</h2>
              <p className="year"> {movie.Movie_Year}</p>
              <div className="button-container">
                <button onClick={() => handlePlayClick(movie._id)}>
                  <img src={playbutton} alt="play" />
                </button>

                <button onClick={() => handleSaveClick(movie._id)}>
                  <img src={bookmark} alt="save" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
