// MusicDash.js
import React, { useState } from "react";
import ShowAllMusic from "./ShowAllMusic";
import PlayMusic from "./PlayMusic";

export default function MusicDash() {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicClick = (music) => {
    setSelectedMusic(music);
  };

  return (
    <div>
      <div>
        <ShowAllMusic onMusicClick={handleMusicClick} />
      </div>
      <div>
        {selectedMusic && (
          <PlayMusic
            music={selectedMusic}
            onClose={() => setSelectedMusic(null)}
          />
        )}
      </div>
    </div>
  );
}