import React, { useState, useEffect } from "react";
import "./style/ShowAllMusic.css";
import PlayMusic from "./PlayMusic";

export default function ShowAllMusic() {
    const [musicList, setMusicList] = useState([]);
    const [selectedMusic, setSelectedMusic] = useState(null);
  
    useEffect(() => {
      const fetchMusicData = async () => {
        try {
          const response = await fetch("https://pravahstudio.onrender.com/music/allMusic");
          const data = await response.json();
          setMusicList(data);
        } catch (error) {
          console.error("Error fetching music data:", error);
        }
      };
  
      fetchMusicData();
    }, []);
    
  
    const handleMusicClick = (music) => {
      setSelectedMusic(music);
    };
  
    const handleNext = () => {
      const currentIndex = musicList.findIndex(
        (music) => music._id === selectedMusic._id
      );
      const nextIndex = (currentIndex + 1) % musicList.length;
      setSelectedMusic(musicList[nextIndex]);
    };
  
    return (
      <div>
        <h2>All Music</h2>
        <div
          className="music-cards-container"
          style={{ backgroundImage: `url('${selectedMusic ? selectedMusic.Music_Cover : ""}')` }}
        >
          {musicList.map((music) => (
            <div
              className="music-card"
              key={music._id}
              onClick={() => handleMusicClick(music)}
            >
              <img
                src={music.Music_Image}
                alt={music.Music_Name}
                className="music-card-image"
              />
              <div className="music-card-details">
                <h3>{music.Music_Name}</h3>
                <button onClick={() => handleMusicClick(music)}>Play</button>
              </div>
            </div>
          ))}
        </div>
        {selectedMusic && (
          <PlayMusic
            music={selectedMusic}
            onClose={() => setSelectedMusic(null)}
            onNext={handleNext}
          />
        )}
      </div>
    );
  }