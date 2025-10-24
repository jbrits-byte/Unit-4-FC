import React, { useState } from "react";
import SectionSelector from "./components/SectionSelector";
import FlashcardDeck from "./components/FlashcardDeck";
import Gamification from "./components/Gamification";
import PomodoroTimer from "./components/PomodoroTimer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [section, setSection] = useState(null);

  return (
    <div className="app-container">
      <h1>VCE Biology Flashcards</h1>
      <PomodoroTimer />
      <MusicPlayer />
      <SectionSelector setSection={setSection} />
      {section && <FlashcardDeck section={section} />}
      <Gamification />
      <footer>
        <p>
          &copy; {new Date().getFullYear()} VCE Biology Flashcard Study | Deployable on GitHub Pages!
        </p>
      </footer>
    </div>
  );
}

export default App;