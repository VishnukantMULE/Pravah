import React, { useState, useEffect } from 'react';
import '../../css/Comment.css';
import avatar from '../../utils/icons/user.png'
function Comment(props) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetch('https://pravah.onrender.com/play', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: props.movieId })
        })
            .then(response => response.json())
            .then(data => setComments(data.Movie_Comment))
            .catch(error => console.error(error));
    }, [props.movieId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // send newComment to the server or handle it in parent component
        fetch('https://pravah.onrender.com/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                movie_id: props.movieId,
                username: props.username,
                comment: newComment
            })
        })
        .then(response => response.json())
        .then(data => {
            // If the server responds with updated comments, update the state variable
            if (data.Movie_Comment) {
                setComments(data.Movie_Comment);
            }
            // fetch the updated comments
            fetch('https://pravah.onrender.com/play', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: props.movieId })
            })
            .then(response => response.json())
            .then(data => setComments(data.Movie_Comment))
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
    
        // clear the input field
        setNewComment('');
    }

    return (
        <div className="comment-section">
            <div className="comment-form border">
                <form onSubmit={handleSubmit} className="flex-column align-center">
                    <label htmlFor="comment-input" className="font-bold">Leave a comment:</label>
                    <h3 className='comment-username margin-top-20'>{props.username}</h3>
                    <div className="input-group margin-top-10">
                        <input
                            id="comment-input"
                            type="text"
                            placeholder="Write your comment here"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                            className="flex-grow padding-10 border-radius-5 border-1 font-size-1"
                        />
                        <button type="submit" className="margin-left-10 padding-10-20 border-none border-radius-5 bg-green color-white font-size-1 cursor-pointer hover-bg-darkgreen">Send</button>
                    </div>
                </form>
            </div>


            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <div className="comment" key={index}>
                    <div className="comment-header">
                        <img className="comment-avatar" src={avatar} alt="User avatar" />
                        <h3 className="comment-username">{comment.Username}</h3>
                    </div>
                    <p className="comment-text">{comment.Comment}</p>
                </div>
            ))}
        </div>
    );
}

export default Comment;
