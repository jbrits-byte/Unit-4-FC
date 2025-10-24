import React from "react";

export default function Feedback({ correct, explanation }) {
  return (
    <div className={`feedback ${correct ? "correct" : "incorrect"}`}>
      {correct ? (
        <span>✅ Correct!</span>
      ) : (
        <span>❌ Incorrect.</span>
      )}
      <p>{explanation}</p>
    </div>
  );
}