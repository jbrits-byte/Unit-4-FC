import React, { useState } from "react";

// Use royalty-free music links
const tracks = [
  { name: "Binaural Focus", src: "https://cdn.pixabay.com/audio/2022/07/26/audio_124b5d7db8.mp3" },
  { name: "Ambient Study", src: "https://cdn.pixabay.com/audio/2022/07/26/audio_125b5d7db9.mp3" }
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0].src);

  return (
    <div className="music-player">
      <h4>Focus Music</h4>
      <select onChange={e => setCurrentTrack(e.target.value)}>
        {tracks.map(track => (
          <option value={track.src} key={track.name}>{track.name}</option>
        ))}
      </select>
      <audio controls loop autoPlay src={currentTrack} />
      <p>Music scientifically shown to improve focus.</p>
    </div>
  );
}