import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import '../css/Music.css';
import Loading from './Loading';

export default function Music() {
  const [musicData, setMusicData] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    // Fetch all the music data from the backend
    fetch('https://pravah.onrender.com/music')
      .then(response => response.json())
      .then(data => setMusicData(data))
      .catch(error => console.error(error));
  }, []);

  const handleCardClick = (music) => {
    setSelectedMusic(music);
    setIsPlaying(true);
  };

  const handleAudioEnded = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current !== null) {
      audioRef.current.play();
    } else if (audioRef.current !== null) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (selectedMusic) {
      audioRef.current.currentTime = currentTime;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [selectedMusic, currentTime, isPlaying]);
  if (!musicData) {
    return <Loading />

  }


  return (
    <div className="music-container">
      <div className="music-list">
        {musicData.map((music, index) => (
          <div
            key={music.Music_ID}
            className="music-card"
            onClick={() => handleCardClick(music)}
          >
            <img src={music.Music_Image} alt={music.Music_Name} />
            <div className="music-card-info">
              <h3>{music.Music_Name}</h3>
              <p>{music.Music_Singers.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedMusic && (
        <div className="music-player">
          <div className="music-player-background">
            <img src={selectedMusic.Music_Cover} alt={selectedMusic.Music_Name} />
          </div>
          <div className="music-player-info">
            <h2>{selectedMusic.Music_Name}</h2>
            <h3>{selectedMusic.Music_Singers.join(", ")}</h3>
            <div className="music-player-controls">
              {/* Add your music player controls here */}
            </div>
            <div className={classNames("audio-player-container", { "playing": isPlaying })}>
              <audio
                ref={audioRef}
                src={selectedMusic.Music_Link}
                controls
                autoPlay
                onEnded={handleAudioEnded}
                className="audio-player"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
