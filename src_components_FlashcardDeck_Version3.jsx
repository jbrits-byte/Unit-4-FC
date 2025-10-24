import React, { useState } from "react";
import flashcards from "../data/biology_flashcards.json";
import Feedback from "./Feedback";

export default function FlashcardDeck({ section }) {
  const cards = flashcards.filter(
    c => c.unit === section.unit && c.area_of_study === String(section.area)
  );
  const [current, setCurrent] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  if (cards.length === 0)
    return <div>No flashcards for this section yet.</div>;

  const handleSubmit = () => {
    setShowFeedback(true);
    if (
      userAnswer.trim().toLowerCase() === cards[current].answer.toLowerCase()
    ) {
      setScore(score + 10); // Gamification: add points
    }
  };

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
    setShowFeedback(false);
    setUserAnswer("");
  };

  return (
    <div className="flashcard-deck">
      <h3>{cards[current].question}</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Type your answer"
      />
      <button onClick={handleSubmit}>Check</button>
      {showFeedback && (
        <Feedback
          correct={userAnswer.trim().toLowerCase() === cards[current].answer.toLowerCase()}
          explanation={cards[current].explanation}
        />
      )}
      <button onClick={nextCard}>Next Card</button>
      <p>Score: {score}</p>
    </div>
  );
}