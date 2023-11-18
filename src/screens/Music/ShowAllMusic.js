// ShowAllMusic.js

import React, { useState, useEffect } from "react";
import "./style/ShowAllMusic.css";
import PlayMusic from "./PlayMusic";
import Loading from "../../system/Loading";
import pravahpng from './style/IMG/PravahStudio.png'
import playpng from './style/IMG/play-buttton.png'
import pause from './style/IMG/pause.png'

export default function ShowAllMusic() {
  const [musicList, setMusicList] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await fetch("https://pravahstudio.onrender.com/music/allMusic");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Add isPlaying property to each music item
        const musicWithPlayingState = data.map((music) => ({
          ...music,
          isPlaying: false,
        }));
        setMusicList(musicWithPlayingState);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching music data:", error.message);
        setError("Error fetching music data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchMusicData();
  }, []);

  const handleMusicClick = (music) => {
    const updatedMusicList = musicList.map((m) => ({
      ...m,
      isPlaying: m._id === music._id ? !m.isPlaying : false,
    }));
    setSelectedMusic(music);
    setMusicList(updatedMusicList);
  };

  const handleNext = () => {
    const currentIndex = musicList.findIndex(
      (music) => music._id === selectedMusic._id
    );
    const nextIndex = (currentIndex + 1) % musicList.length;
    setSelectedMusic(musicList[nextIndex]);
    // Update isPlaying state for the next music
    const updatedMusicList = musicList.map((music, index) => ({
      ...music,
      isPlaying: index === nextIndex,
    }));
    setMusicList(updatedMusicList);
  };

  return (
    <div className="music-list-container">
      <div className="music">
        <h2>All Music</h2>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="music-list">
            {musicList.map((music) => (
              <li key={music._id} className="music-list-item" onClick={() => handleMusicClick(music)}>
                <img
                  src={music.Music_Image || pravahpng}
                  alt={music.Music_Name}
                />
                <div className="music-details">
                  <h3>{music.Music_Name}</h3>
                  <button className="playpausebtn" onClick={() => handleMusicClick(music)}>
                    {music.isPlaying ? (
                      <img src={pause} alt="Pause" />
                    ) : (
                      <img src={playpng} alt="Play" />
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedMusic && (
        <PlayMusic
          music={selectedMusic}
          onClose={() => setSelectedMusic(null)}
          onNext={handleNext}
          isPlaying={selectedMusic.isPlaying} // Pass isPlaying from selectedMusic
        />
      )}
    </div>
  );
}
