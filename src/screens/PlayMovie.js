import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './play/Comments';
import '../css/Play.css';
import likeicon from '../utils/icons/heart2.png';
import like2icon from '../utils/icons/heart.png';

import saveicon from '../utils/icons/save.png';
import commenticon from '../utils/icons/comment.png';
import infoicon from '../utils/icons/info.png';
import Recommand from './play/Recommand';

import Loading from './Loading';


function PlayMovie(props) {
    const [movie, setMovie] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const { movieId } = useParams();
    const usernameIs = props.username;
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch('https://pravah.onrender.com/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: movieId })
        })
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error));
    }, [movieId]);

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleSaveClick = () => {
     alert("Movie Saved")
     fetch('https://pravah.onrender.com/save', {
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
        // code to handle save click
    };

    const handleLikeClick = () => {
        setLiked(!liked);
      
      
        fetch("https://pravah.onrender.com/like", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            movie_id: movieId
          })
        })
          .then(response => {
            if (response.ok) {
              console.log("Movie like count updated");
            } else {
              console.error("Error updating movie like count:", response.status, response.statusText);
            }
          })
          .catch(error => {
            console.error("Error updating movie like count:", error);
          });
      };

    const handleShowDetailsClick = () => {
        setShowDetails(!showDetails);
    };

    if (!movie) {
        return <Loading />;
    }

    return (
        <div className="play-movie-container">
            <div className="video-container">
                <video className="movie-video" src={movie.Movie_Link} poster={movie.Movie_Poster} controls />
            </div>
            <div className="movie-details-container">
                <h1 className="movie-title">{movie.Movie_Name}</h1>
                <div className="buttons-container">
                    <button className="like-button" onClick={handleLikeClick} style={{ border: "none", backgroundColor: "transparent" }}>
                        <span  style={{ color: "white" ,font:"20"}}>{movie.Movie_Like}</span>
                        <img src={liked ? likeicon : like2icon} alt="like-icon" style={{ height: "40px", marginRight: "5px" }} />
                    </button>

                    <button className="save-button" onClick={handleSaveClick} style={{ border: "none", backgroundColor: "transparent" }}>
                        <img src={saveicon} alt="save-icon" style={{ height: "40px", marginRight: "5px" }} />
                        <span style={{ color: "#fff" }}> {movie.Movie_Save}</span>
                    </button>
                    <button className="comment-button" onClick={handleCommentClick} style={{ border: "none", backgroundColor: "transparent" }}>
                        <img src={commenticon} alt="comment-icon" style={{ height: "40px", marginRight: "5px" }} />
                        <span style={{ color: "#fff" }}></span>
                    </button>
                    <button className="showdetails-button" onClick={handleShowDetailsClick} style={{ border: "none", backgroundColor: "transparent" }}>
                        <img src={infoicon} alt="info-icon" style={{ height: "40px", marginRight: "5px" }} />
                        <span style={{ color: "#fff" }}></span>
                    </button>

                </div>
                <div className="accordion-container">
                    <div className="accordion">
                        {showDetails && (
                            <>
                                <label className="accordion-label" htmlFor="accordion-1">Details</label>
                                <div className="accordion-content">
                                    <p className="movie-detail"> <b>Views:</b>  {movie.Movie_Views}</p>
                                    <p className="movie-detail"><b>Language:</b> {movie.Movie_Language}</p>
                                    <p className="movie-detail"><b>Genre:</b> {movie.Movie_Genre.join(', ')}</p>
                                    <p className="movie-detail"><b>Cast:</b> {movie.Movie_Cast.join(', ')}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {showComments && <Comments className="comments-container" movieId={movieId} username={usernameIs} />}
            <hr />
            <Recommand movieId={movieId} username={usernameIs} />

        </div>
    );
}

export default PlayMovie;
