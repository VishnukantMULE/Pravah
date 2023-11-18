import React, { useState, useEffect, useRef } from "react";
import "./style/PlayMusic.css";
import Loading from "../../system/Loading";

export default function PlayMusic({ music, onClose, onNext }) {
  const [musicDetails, setMusicDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const audioElement = useRef(null);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await fetch("https://pravahstudio.onrender.com/music/getMusicById", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: music._id }),
        });
        const data = await response.json();
        setMusicDetails(data);
        audioElement.current.load();
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };
    fetchMusicData();
  }, [music._id]);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current?.play();
    } else {
      audioElement.current?.pause();
    }
  }, [isPlaying]);
  

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.loop = isRepeating;
    }
  }, [isRepeating]);
  

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  const handleEnded = () => {
    if (!isRepeating) {
      onNext();
    }
  };

  return (
    <div
      className="play-music-container"
      style={{ backgroundImage: `url('${musicDetails ? musicDetails.Music_Cover : ""}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {musicDetails ? (
        <>
         
          <p>{musicDetails.Music_Name}</p>
          <div className="play-music-controls">
            <div className="audio-container">
            <audio ref={audioElement} onEnded={handleEnded} controls autoPlay>
  <source src={musicDetails.Music_Link} type="audio/mp3" />
  Your browser does not support the audio tag.
</audio>

            </div>
            <div className="additional-controls">
              <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button onClick={onNext}>Next</button>
              <button onClick={toggleRepeat}>
                {isRepeating ? "Repeat On" : "Repeat Off"}
              </button>
            </div>
          </div>
          <div className="play-music-controls">
            <button className="close-music-button" onClick={onClose}>
              Close Music Player
            </button>
          </div>
        </>
      ) : (
        <Loading/>
        // <p>Loading...</p>
      )}
    </div>
  );
}
