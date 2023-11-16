import React, { useState } from 'react';
import './MovieAction.css';

import like_1 from './ICONS/like_1.png';
import like_2 from './ICONS/like_2.png';
import save_1 from './ICONS/save_1.png';
import save_2 from './ICONS/save_2.png';
import send_1 from './ICONS/send_1.png';
import send_2 from './ICONS/send_2.png';
import comment_1 from './ICONS/comment_1.png';
import comment_2 from './ICONS/comment_2.png';

export default function MovieAction() {
  const [isLiked, setLiked] = useState(false);
  const [isCommented, setCommented] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [isShared, setShared] = useState(false);

  const handleLikeClick = () => {
    setLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setCommented(!isCommented);
  };

  const handleSaveClick = () => {
    setSaved(!isSaved);
  };

  const handleShareClick = () => {
    setShared(!isShared);
    // Add your share functionality here
  };

  return (
    <div className="movie-action">
      <button
        className={`action-button ${isLiked ? 'active' : ''}`}
        onClick={handleLikeClick}
      >
        <img
          src={isLiked ? like_2 : like_1}
          alt="Like"
        />
        Like
      </button>

      <button
        className={`action-button ${isCommented ? 'active' : ''}`}
        onClick={handleCommentClick}
      >
        <img
          src={isCommented ? comment_2 : comment_1}
          alt="Comment"
        />
        Comment
      </button>

      <button
        className={`action-button ${isSaved ? 'active' : ''}`}
        onClick={handleSaveClick}
      >
        <img
          src={isSaved ? save_2 : save_1}
          alt="Save"
        />
        Save
      </button>

      <button
        className={`action-button ${isShared ? 'active' : ''}`}
        onClick={handleShareClick}
      >
        <img
          src={isShared ? send_2 : send_1}
          alt="Share"
        />
        Share
      </button>
    </div>
  );
}
